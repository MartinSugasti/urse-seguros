<?php
// emitir_movilidad.php - Ubicación: public_html/api/emitir_movilidad.php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // Ajustar por seguridad en producción
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

/**
 * @param string $msg
 * @param array<string, mixed> $context
 */
function emitir_movilidad_log(string $msg, array $context = []): void
{
    $line = '[emitir_movilidad] ' . $msg;
    if ($context !== []) {
        $line .= ' | ' . json_encode($context, JSON_UNESCAPED_UNICODE);
    }
    error_log($line);
}

/**
 * @param mixed $data
 */
function emitir_movilidad_extract_link_de_pago($data): ?string
{
    if (!is_array($data)) {
        return null;
    }
    foreach (['linkDePago', 'link_de_pago', 'urlPago', 'url_pago'] as $key) {
        if (!empty($data[$key]) && is_string($data[$key])) {
            return $data[$key];
        }
    }
    foreach (['data', 'result', 'response', 'emision', 'payload'] as $nested) {
        if (!empty($data[$nested]) && is_array($data[$nested])) {
            $found = emitir_movilidad_extract_link_de_pago($data[$nested]);
            if ($found !== null) {
                return $found;
            }
        }
    }
    return null;
}

function emitir_movilidad_fecha_a_iso_utc(string $yyyyMmDd, bool $useNoon = false): string
{
    $dt = DateTimeImmutable::createFromFormat('Y-m-d', $yyyyMmDd, new DateTimeZone('UTC'));
    if ($dt === false) {
        emitir_movilidad_log('fecha_invalida', ['valor' => $yyyyMmDd]);
        $dt = (new DateTimeImmutable('now', new DateTimeZone('UTC')))->setTime(0, 0, 0);
    }
    $dt = $dt->setTime($useNoon ? 12 : 0, 0, 0);
    return $dt->format('Y-m-d\TH:i:s.v\Z');
}

/**
 * Devuelve la carpeta credentials fuera de public_html.
 * Soporta que este archivo esté en public_html/ o public_html/api/.
 */
function emitir_movilidad_credentials_dir(): string
{
    $candidateOneLevel = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'credentials';
    if (is_dir($candidateOneLevel)) {
        return $candidateOneLevel;
    }
    return dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'credentials';
}

/** Ruta del JSON con tokens SBI en credentials/token_store.json. */
function emitir_movilidad_sbi_token_store_path(): string
{
    return emitir_movilidad_credentials_dir() . DIRECTORY_SEPARATOR . 'token_store.json';
}

/**
 * @return array{access_token: string, refresh_token: string, expires_at: int}|null
 */
function emitir_movilidad_sbi_read_token_store(): ?array
{
    $path = emitir_movilidad_sbi_token_store_path();
    if (!is_file($path) || !is_readable($path)) {
        return null;
    }
    $raw = file_get_contents($path);
    if ($raw === false || trim($raw) === '') {
        return null;
    }
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        return null;
    }
    $access = isset($data['access_token']) && is_string($data['access_token']) ? trim($data['access_token']) : '';
    $refresh = isset($data['refresh_token']) && is_string($data['refresh_token']) ? trim($data['refresh_token']) : '';
    $expiresAt = isset($data['expires_at']) ? (int) $data['expires_at'] : 0;
    if ($access === '' || $refresh === '' || $expiresAt <= 0) {
        return null;
    }
    return [
        'access_token' => $access,
        'refresh_token' => $refresh,
        'expires_at' => $expiresAt,
    ];
}

/**
 * @param array{access_token: string, refresh_token: string, expires_at: int} $row
 */
function emitir_movilidad_sbi_write_token_store(array $row): void
{
    $path = emitir_movilidad_sbi_token_store_path();
    $payload = [
        'access_token' => $row['access_token'],
        'refresh_token' => $row['refresh_token'],
        'expires_at' => $row['expires_at'],
    ];
    $json = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($json === false) {
        emitir_movilidad_log('token_store_encode_failed', ['json_error' => json_last_error_msg()]);
        return;
    }
    if (file_put_contents($path, $json, LOCK_EX) !== false) {
        @chmod($path, 0600);
    }
}

/**
 * Extrae tokens desde LoginResponseDto (login o refreshtoken).
 *
 * @param array<string, mixed>|null $auth_response
 * @return array{access_token: string, refresh_token: string, expires_at: int}|null
 */
function emitir_movilidad_sbi_tokens_from_login_response(?array $auth_response): ?array
{
    if (!is_array($auth_response)) {
        return null;
    }
    $token = null;
    $expiresIn = null;
    $accessNested = $auth_response['accessToken'] ?? null;
    if (is_array($accessNested)) {
        $token = $accessNested['token'] ?? null;
        if (isset($accessNested['expiresIn'])) {
            $expiresIn = (int) $accessNested['expiresIn'];
        }
    }
    if (!is_string($token) || $token === '') {
        $maybe = $auth_response['token'] ?? null;
        if (is_string($maybe) && $maybe !== '') {
            $token = $maybe;
        }
    }
    $refresh = $auth_response['refreshToken'] ?? null;
    if (!is_string($token) || $token === '' || !is_string($refresh) || $refresh === '') {
        return null;
    }
    $skew = 60;
    $ttl = ($expiresIn !== null && $expiresIn > 0) ? $expiresIn : 1800;
    $expiresAt = time() + $ttl - $skew;
    return [
        'access_token' => $token,
        'refresh_token' => $refresh,
        'expires_at' => $expiresAt,
    ];
}

/**
 * POST JSON a una URL SBI; devuelve cuerpo crudo, código HTTP y JSON decodificado si aplica.
 *
 * @return array{http: int, body: string, json: mixed}
 */
function emitir_movilidad_sbi_post_json(string $url, array $body): array
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: text/plain',
    ]);
    $raw = curl_exec($ch);
    $http = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($raw === false) {
        emitir_movilidad_log('sbi_curl_error', ['url' => $url, 'curl_error' => curl_error($ch)]);
        $raw = '';
    }
    curl_close($ch);
    $json = json_decode($raw, true);
    return ['http' => $http, 'body' => is_string($raw) ? $raw : '', 'json' => $json];
}

/**
 * Obtiene Bearer token: token_store válido, refreshtoken si expiró, o login.
 *
 * @return array{ok: bool, token: ?string, http: int, detail: mixed}
 */
function emitir_movilidad_sbi_obtain_access_token(string $loginUrl, string $refreshUrl, array $authCredentials): array
{
    $store = emitir_movilidad_sbi_read_token_store();
    $now = time();

    if ($store !== null && $now < $store['expires_at']) {
        emitir_movilidad_log('sbi_token_cache_hit', [
            'expires_at' => $store['expires_at'],
            'token_prefix' => substr($store['access_token'], 0, 12) . '…',
        ]);
        return ['ok' => true, 'token' => $store['access_token'], 'http' => 200, 'detail' => null];
    }

    if ($store !== null && $store['access_token'] !== '' && $store['refresh_token'] !== '') {
        emitir_movilidad_log('sbi_token_refresh_attempt', ['reason' => 'expired_or_invalid_window']);
        $refreshBody = [
            'accessToken' => $store['access_token'],
            'refreshToken' => $store['refresh_token'],
        ];
        $ref = emitir_movilidad_sbi_post_json($refreshUrl, $refreshBody);
        emitir_movilidad_log('sbi_refresh_response', [
            'http' => $ref['http'],
            'body_length' => strlen($ref['body']),
            'body_preview' => substr($ref['body'], 0, 500),
        ]);
        if ($ref['http'] < 400 && is_array($ref['json'])) {
            $parsed = emitir_movilidad_sbi_tokens_from_login_response($ref['json']);
            if ($parsed !== null) {
                emitir_movilidad_sbi_write_token_store($parsed);
                emitir_movilidad_log('sbi_token_refreshed', ['expires_at' => $parsed['expires_at']]);
                return ['ok' => true, 'token' => $parsed['access_token'], 'http' => $ref['http'], 'detail' => null];
            }
        }
        emitir_movilidad_log('sbi_refresh_failed_fallback_login', ['http' => $ref['http']]);
    }

    emitir_movilidad_log('sbi_token_login', ['url' => $loginUrl]);
    $login = emitir_movilidad_sbi_post_json($loginUrl, $authCredentials);
    emitir_movilidad_log('sbi_login_response', [
        'http' => $login['http'],
        'body_length' => strlen($login['body']),
        'body_preview' => substr($login['body'], 0, 500),
    ]);

    if ($login['http'] >= 400 || !is_array($login['json'])) {
        return [
            'ok' => false,
            'token' => null,
            'http' => $login['http'],
            'detail' => is_array($login['json']) ? $login['json'] : $login['body'],
        ];
    }

    $parsed = emitir_movilidad_sbi_tokens_from_login_response($login['json']);
    if ($parsed === null) {
        $token = null;
        if (is_string($login['body']) && trim($login['body']) !== '') {
            $maybe = trim($login['body']);
            if (preg_match('/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_.+\/=]+$/', $maybe)) {
                $token = $maybe;
            }
        }
        if ($token !== null) {
            $parsed = [
                'access_token' => $token,
                'refresh_token' => is_string($login['json']['refreshToken'] ?? null) ? (string) $login['json']['refreshToken'] : '',
                'expires_at' => time() + 1800 - 60,
            ];
        }
        if ($parsed === null || $parsed['refresh_token'] === '') {
            return [
                'ok' => false,
                'token' => null,
                'http' => $login['http'],
                'detail' => $login['json'],
            ];
        }
    }

    emitir_movilidad_sbi_write_token_store($parsed);
    return ['ok' => true, 'token' => $parsed['access_token'], 'http' => $login['http'], 'detail' => null];
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    emitir_movilidad_log('preflight_OPTIONS');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    emitir_movilidad_log('method_not_allowed', ['method' => $_SERVER['REQUEST_METHOD'] ?? '']);
    http_response_code(405);
    echo json_encode(['error' => 'method_not_allowed', 'linkDePago' => null]);
    exit;
}

$rawBody = file_get_contents('php://input');
emitir_movilidad_log('raw_body_length', ['bytes' => strlen($rawBody)]);

$input = json_decode($rawBody, true);
if (!is_array($input)) {
    emitir_movilidad_log('json_decode_failed', ['json_error' => json_last_error_msg()]);
    http_response_code(400);
    echo json_encode(['error' => 'invalid_json', 'linkDePago' => null]);
    exit;
}

$inputKeys = array_keys($input);
$facturaLen = isset($input['facturaDeCompra']) && is_string($input['facturaDeCompra'])
    ? strlen($input['facturaDeCompra'])
    : 0;
$facturaNombreRaw = isset($input['facturaDeCompraNombre']) && is_string($input['facturaDeCompraNombre'])
    ? $input['facturaDeCompraNombre']
    : '';
$facturaMimeRaw = isset($input['facturaDeCompraMime']) && is_string($input['facturaDeCompraMime'])
    ? trim($input['facturaDeCompraMime'])
    : '';
emitir_movilidad_log('input_recibido', [
    'keys' => $inputKeys,
    'facturaDeCompra_base64_length' => $facturaLen,
    'facturaDeCompraNombre' => $facturaNombreRaw !== '' ? substr(basename(str_replace(["\0", '\\'], '', $facturaNombreRaw)), 0, 255) : null,
    'facturaDeCompraMime' => $facturaMimeRaw !== '' ? $facturaMimeRaw : null,
    'tiene_recaptcha' => !empty($input['g-recaptcha-response']),
]);

// 1. Configuración de SBI
$auth_url = 'https://api-sbi-cotizador-uat.sbi.uy/partners/auth/login';
$refresh_url = 'https://api-sbi-cotizador-uat.sbi.uy/partners/auth/refreshtoken';
$emision_url = 'https://api-sbi-cotizador-uat.sbi.uy/partners/multiseguros/Emision';

// 2. Autenticación: credenciales desde credentials/sbi.php (fuera de public_html)
$credentials_path = emitir_movilidad_credentials_dir() . DIRECTORY_SEPARATOR . 'sbi.php';
$credentials = is_readable($credentials_path) ? require $credentials_path : null;
$auth_data = is_array($credentials) ? [
    'u' => isset($credentials['u']) ? (string) $credentials['u'] : '',
    'p' => isset($credentials['p']) ? (string) $credentials['p'] : '',
] : ['u' => '', 'p' => ''];

if ($auth_data['u'] === '' || $auth_data['p'] === '') {
    emitir_movilidad_log('credentials_invalid_or_missing', ['path' => $credentials_path]);
    http_response_code(500);
    echo json_encode([
        'error' => 'credentials_invalid_or_missing',
        'linkDePago' => null,
        'mensaje' => 'No se pudieron cargar credenciales válidas desde ../credentials/sbi.php',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$authResult = emitir_movilidad_sbi_obtain_access_token($auth_url, $refresh_url, $auth_data);
$token = $authResult['token'];
$auth_http = $authResult['http'];

$tokenLen = is_string($token) ? strlen($token) : 0;
emitir_movilidad_log('auth_token_resumen', [
    'token_length' => $tokenLen,
    'token_prefix' => is_string($token) ? substr($token, 0, 12) . '…' : null,
]);

if (!$authResult['ok'] || $token === null) {
    emitir_movilidad_log('auth_failed_abort', ['auth_http' => $auth_http]);
    http_response_code(502);
    $payload = [
        'error' => 'auth_failed',
        'http' => $auth_http,
        'detail' => $authResult['detail'],
        'linkDePago' => null,
    ];
    if ($auth_http === 503 || $auth_http === 502) {
        $payload['mensaje'] = 'El login del cotizador SBI (UAT) respondió no disponible. No es un error del formulario; reintente más tarde o consulte con SBI si persiste.';
    }
    echo json_encode($payload);
    exit;
}

// 3. Validación mínima de datos del frontend (alineado con ContratarMovilidad.jsx)
$maxFacturaBytes = 10 * 1024 * 1024; // 10 MB
$facturaB64 = isset($input['facturaDeCompra']) && is_string($input['facturaDeCompra'])
    ? trim($input['facturaDeCompra'])
    : '';
if ($facturaB64 === '') {
    emitir_movilidad_log('validacion_fallida', ['motivo' => 'facturaDeCompra_vacia_o_ausente']);
    http_response_code(400);
    echo json_encode(['error' => 'missing_invoice', 'linkDePago' => null]);
    exit;
}
$facturaBin = base64_decode($facturaB64, true);
if ($facturaBin === false) {
    emitir_movilidad_log('validacion_fallida', ['motivo' => 'facturaDeCompra_base64_invalida']);
    http_response_code(400);
    echo json_encode(['error' => 'invalid_invoice_file', 'linkDePago' => null]);
    exit;
}
if (strlen($facturaBin) > $maxFacturaBytes) {
    emitir_movilidad_log('validacion_fallida', [
        'motivo' => 'facturaDeCompra_supera_tamano_maximo',
        'bytes' => strlen($facturaBin),
        'max_bytes' => $maxFacturaBytes,
    ]);
    http_response_code(413);
    echo json_encode(['error' => 'invoice_file_too_large', 'linkDePago' => null]);
    exit;
}
unset($facturaBin);

$facturaNombre = $facturaNombreRaw !== ''
    ? substr(basename(str_replace(["\0", '\\'], '', $facturaNombreRaw)), 0, 255)
    : '';
$facturaMime = $facturaMimeRaw;
if ($facturaMime !== '' && !preg_match('#^[a-z0-9][a-z0-9+.-]*\/[a-z0-9][a-z0-9+.\/-]*$#i', $facturaMime)) {
    emitir_movilidad_log('factura_mime_descartado', ['mime' => substr($facturaMime, 0, 80)]);
    $facturaMime = '';
}

$facturaMimeToFilename = [
    'application/pdf' => 'factura.pdf',
    'image/jpeg' => 'factura.jpg',
    'image/jpg' => 'factura.jpg',
    'image/png' => 'factura.png',
    'image/gif' => 'factura.gif',
    'image/webp' => 'factura.webp',
    'application/msword' => 'factura.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'factura.docx',
];

if ($facturaMime === '' && $facturaNombre !== '') {
    $ext = strtolower((string) pathinfo($facturaNombre, PATHINFO_EXTENSION));
    $extToMime = [
        'pdf' => 'application/pdf',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
        'webp' => 'image/webp',
        'doc' => 'application/msword',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (isset($extToMime[$ext])) {
        $facturaMime = $extToMime[$ext];
    }
}

$facturaNombreArchivo = $facturaNombre;
if ($facturaNombreArchivo === '') {
    $lc = strtolower($facturaMime);
    $facturaNombreArchivo = $facturaMimeToFilename[$lc] ?? 'factura.pdf';
    emitir_movilidad_log('factura_nombre_por_defecto', ['nombre' => $facturaNombreArchivo, 'mime' => $facturaMime]);
}

/** Documento para SBI: JSON string con formato [{"NombreDeArchivo":"...","DocBase64":"..."}]. */
$facturaValorParaApi = json_encode([[
    'NombreDeArchivo' => $facturaNombreArchivo,
    'DocBase64' => $facturaB64,
]], JSON_UNESCAPED_SLASHES);

if ($facturaValorParaApi === false) {
    emitir_movilidad_log('factura_valor_para_api_encode_failed', ['json_error' => json_last_error_msg()]);
    $facturaValorParaApi = '[{"NombreDeArchivo":"","DocBase64":""}]';
}

$nombre = isset($input['nombreORazonSocial']) ? trim((string) $input['nombreORazonSocial']) : '';
$apellido = isset($input['apellido']) ? trim((string) $input['apellido']) : '';
$tipoDoc = isset($input['tipoDeDocumento']) ? trim((string) $input['tipoDeDocumento']) : 'CI';
$numDoc = isset($input['numeroDeDocumentoODeRut']) ? trim((string) $input['numeroDeDocumentoODeRut']) : '';
$fechaNacInput = isset($input['fechaDeNacimiento']) ? trim((string) $input['fechaDeNacimiento']) : '';
$inicioVigInput = isset($input['inicioDeVigencia']) ? trim((string) $input['inicioDeVigencia']) : '';

$emision_payload = [
    'productoId' => $input['productoId'] ?? '433d8ff5-1157-47e8-aae5-a418fbf0f375',
    'paqueteId' => $input['paqueteId'] ?? 'a7bf1344-a71d-4332-b8df-4569851b2324',
    'tipoDeDocumento' => $tipoDoc !== '' ? $tipoDoc : 'CI',
    'numeroDeDocumentoODeRut' => $numDoc !== '' ? $numDoc : '44264769',
    'nombreORazonSocial' => $nombre !== '' ? $nombre : 'Juan',
    'apellido' => $apellido !== '' ? $apellido : 'Pérez',
    'fechaDeNacimiento' => $fechaNacInput !== ''
        ? emitir_movilidad_fecha_a_iso_utc($fechaNacInput, true)
        : '1990-05-15T12:00:00.000Z',
    'correoElectronico' => isset($input['correoElectronico']) ? (string) $input['correoElectronico'] : 'cliente.test@example.com',
    'celular' => isset($input['celular']) ? (string) $input['celular'] : '094567890',
    'calle' => isset($input['calle']) ? (string) $input['calle'] : 'Av. 18 de Julio',
    'numeroDePuerta' => isset($input['numeroDePuerta']) ? (string) $input['numeroDePuerta'] : '1234',
    'apartamento' => isset($input['apartamento']) ? (string) $input['apartamento'] : '502',
    'codigoPostal' => isset($input['codigoPostal']) ? (string) $input['codigoPostal'] : '11200',
    'departamento' => isset($input['departamento']) ? (string) $input['departamento'] : 'Montevideo',
    'inicioDeVigencia' => $inicioVigInput !== ''
        ? emitir_movilidad_fecha_a_iso_utc($inicioVigInput, false)
        : (new DateTimeImmutable('tomorrow', new DateTimeZone('UTC')))->setTime(0, 0, 0)->format('Y-m-d\TH:i:s.v\Z'),
    'formaDePago' => 'T',
    'cantidadDeCuotas' => 0,
    'couponCode' => 'urse30',
    'camposAdicionales' => [
        ['name' => 'Marca', 'value' => isset($input['marca']) ? (string) $input['marca'] : ''],
        ['name' => 'Modelo', 'value' => isset($input['modelo']) ? (string) $input['modelo'] : ''],
        ['name' => 'Numero Serie', 'value' => isset($input['numeroDeSerie']) ? (string) $input['numeroDeSerie'] : ''],
        ['name' => 'Factura de Compra', 'value' => $facturaValorParaApi],
    ],
];

emitir_movilidad_log('emision_payload_resumen', [
    'productoId' => $emision_payload['productoId'],
    'paqueteId' => $emision_payload['paqueteId'],
    'tipoDeDocumento' => $emision_payload['tipoDeDocumento'],
    'numeroDeDocumentoODeRut' => $emision_payload['numeroDeDocumentoODeRut'],
    'nombreORazonSocial' => $emision_payload['nombreORazonSocial'],
    'apellido' => $emision_payload['apellido'],
    'fechaDeNacimiento' => $emision_payload['fechaDeNacimiento'],
    'correoElectronico' => $emision_payload['correoElectronico'],
    'celular' => $emision_payload['celular'],
    'calle' => $emision_payload['calle'],
    'numeroDePuerta' => $emision_payload['numeroDePuerta'],
    'apartamento' => $emision_payload['apartamento'],
    'codigoPostal' => $emision_payload['codigoPostal'],
    'departamento' => $emision_payload['departamento'],
    'inicioDeVigencia' => $emision_payload['inicioDeVigencia'],
    'formaDePago' => $emision_payload['formaDePago'],
    'cantidadDeCuotas' => $emision_payload['cantidadDeCuotas'],
    'camposAdicionales' => array_slice($emision_payload['camposAdicionales'], 0, -1),
]);

$emision_json = json_encode($emision_payload);
if ($emision_json === false) {
    emitir_movilidad_log('emision_json_encode_failed', ['json_error' => json_last_error_msg()]);
    http_response_code(500);
    echo json_encode(['error' => 'payload_encode_failed', 'linkDePago' => null]);
    exit;
}

emitir_movilidad_log('emision_request_start', ['url' => $emision_url, 'payload_bytes' => strlen($emision_json)]);

$ch = curl_init($emision_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $emision_json);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $token,
]);
$result = curl_exec($ch);
$emision_http = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($result === false) {
    emitir_movilidad_log('emision_curl_error', ['curl_error' => curl_error($ch)]);
}
curl_close($ch);

emitir_movilidad_log('emision_response', [
    'http' => $emision_http,
    'body_length' => is_string($result) ? strlen($result) : 0,
    'body_preview' => is_string($result) ? substr($result, 0, 800) : '',
]);

$response_data = is_string($result) ? json_decode($result, true) : null;
$linkDePago = emitir_movilidad_extract_link_de_pago($response_data);

emitir_movilidad_log('emision_parseado', [
    'json_ok' => is_array($response_data),
    'linkDePago_presente' => $linkDePago !== null,
    'linkDePago_length' => is_string($linkDePago) ? strlen($linkDePago) : 0,
]);

// 4. Respuesta al frontend: linkDePago; en fallo, detalle acotado para depuración (el resto queda en error_log)
$out = ['linkDePago' => $linkDePago];
$ok = $emision_http < 400 && $linkDePago !== null;

if (!$ok) {
    emitir_movilidad_log('emision_no_ok_o_sin_link', [
        'http' => $emision_http,
        'sin_link' => $linkDePago === null,
    ]);
    http_response_code($emision_http >= 400 ? $emision_http : 502);
    $out['emisionHttp'] = $emision_http;
    if ($emision_http >= 400) {
        $out['error'] = 'emision_http_error';
    } else {
        $out['error'] = 'missing_linkDePago_in_upstream';
    }
    if (is_array($response_data)) {
        $out['detail'] = $response_data;
    } elseif (is_string($result)) {
        $out['detailRaw'] = substr($result, 0, 2000);
    }
}

echo json_encode($out, JSON_UNESCAPED_UNICODE);
