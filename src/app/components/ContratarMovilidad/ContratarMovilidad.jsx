import { useState, useRef, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import condicionesPdf from '../../../assets/docs/movilidad_condiciones.pdf';

import PrivacyPolicyModal from '../shared/PrivacyPolicyModal';
import { GOOGLE_RECAPTCHA_SITE_KEY } from '../../constants';

const formatLocalDate = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

/** Enteros con separador de miles "." (ej. 1000 → "1.000"). */
const formatIntegerWithDotThousands = (value) => {
  if (value === undefined || value === null) return null;
  const n = Number(value);
  if (Number.isNaN(n)) return null;
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    const base64 = typeof dataUrl === 'string' ? dataUrl.split(',')[1] ?? dataUrl : '';
    resolve(base64);
  };
  reader.onerror = () => reject(reader.error);
  reader.readAsDataURL(file);
});

const MAX_FACTURA_FILE_SIZE_BYTES = 10 * 1024 * 1024;

const URUGUAY_DEPARTAMENTOS = [
  'Artigas',
  'Canelones',
  'Cerro Largo',
  'Colonia',
  'Durazno',
  'Flores',
  'Florida',
  'Lavalleja',
  'Maldonado',
  'Montevideo',
  'Paysandú',
  'Río Negro',
  'Rivera',
  'Rocha',
  'Salto',
  'San José',
  'Soriano',
  'Tacuarembó',
  'Treinta y Tres'
];

const PAQUETES_VALOR_VEHICULO_DISPOSITIVO = [
  { id: '5333cb3c-adfd-4ad8-92eb-365d29b7f983', nombre: 'Valor desde USD 0 a 400', valorAsegurado: 400, precio: 62.36 },
  { id: 'bc4d5179-433d-499e-a991-3262d7981f09', nombre: 'Valor desde USD 401 a 700', valorAsegurado: 700, precio: 74.69 },
  { id: '17455ec1-c4c6-4dd7-9e31-417241940d22', nombre: 'Valor desde USD 701 a 1.000', valorAsegurado: 1000, precio: 83.83 },
  { id: '74e935e4-bd0d-4ea5-84d8-e217f839908e', nombre: 'Valor desde USD 1.001 a 1.300', valorAsegurado: 1300, precio: 123.97 },
  { id: 'd3390890-1e22-4426-91e1-52b9b9aee21b', nombre: 'Valor desde USD 1.301 a 1.600', valorAsegurado: 1600, precio: 153.23 },
  { id: 'e18da57c-9860-41a9-929c-cdf4c84d9bbc', nombre: 'Valor entre USD 1.601 a 2.000', valorAsegurado: 2000, precio: 184.79 },
  { id: 'f7b3fe41-42ad-4e50-ae9a-ca425e521c0a', nombre: 'Valor entre USD 2.001 a 2.500', valorAsegurado: 2500, precio: 223.24 },
  { id: '65f77d16-d8ec-46e4-94c0-3ac7bbb7c4ac', nombre: 'Valor entre USD 2.501 a 3.000', valorAsegurado: 3000, precio: 267.94 }
];

const ContratarMovilidad = () => {
  const [loading, setLoading] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [nombreArchivoFactura, setNombreArchivoFactura] = useState('');
  const [valorAsegurado, setValorAsegurado] = useState();
  const [precio, setPrecio] = useState();
  const recaptchaRef = useRef();
  const facturaInputRef = useRef();

  const todayStr = useMemo(() => formatLocalDate(new Date()), []);

  const showErrorToast = () => toast.error('Algo salió mal. Intente más tarde!', {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });

  const enableContactFormButton = () => setCaptchaReady(true);
  const disableContactFormButton = () => setCaptchaReady(false);

  const resetCaptchaAndDisableSubmit = () => {
    recaptchaRef.current?.reset();
    setCaptchaReady(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const inicio = form.inicioDeVigencia.value;
    if (inicio < todayStr) {
      toast.error('La fecha de inicio de póliza debe ser hoy o una fecha futura.', {
        position: 'bottom-left',
        autoClose: 5000,
        theme: 'light'
      });
      return;
    }

    setLoading(true);

    const fileInput = form.facturaDeCompra;
    const file = fileInput?.files?.[0];
    if (!file) {
      setLoading(false);
      toast.error('Debe adjuntar la factura de compra.', { position: 'bottom-left', theme: 'light' });
      return;
    }
    if (file.size > MAX_FACTURA_FILE_SIZE_BYTES) {
      setLoading(false);
      toast.error('La factura no puede superar los 10 MB.', { position: 'bottom-left', theme: 'light' });
      return;
    }

    let facturaBase64;
    try {
      facturaBase64 = await fileToBase64(file);
    } catch {
      setLoading(false);
      showErrorToast();
      return;
    }

    const body = {
      nombreORazonSocial: form.nombreORazonSocial.value,
      apellido: form.apellido.value,
      tipoDeDocumento: form.tipoDeDocumento.value,
      numeroDeDocumentoODeRut: form.numeroDeDocumentoODeRut.value,
      fechaDeNacimiento: form.fechaDeNacimiento.value,
      correoElectronico: form.correoElectronico.value,
      celular: form.celular.value,
      calle: form.calle.value,
      numeroDePuerta: form.numeroDePuerta.value,
      apartamento: form.apartamento.value,
      codigoPostal: form.codigoPostal.value,
      departamento: form.departamento.value,
      inicioDeVigencia: form.inicioDeVigencia.value,
      marca: form.marca.value,
      modelo: form.modelo.value,
      paqueteId: form.valorVehiculoDispositivo.value,
      numeroDeSerie: form.numeroDeSerie.value,
      facturaDeCompra: facturaBase64,
      facturaDeCompraNombre: file.name || '',
      facturaDeCompraMime: file.type || '',
      'g-recaptcha-response': recaptchaRef.current.getValue()
    };

    try {
      const response = await fetch('https://www.urseseguros.com.uy/api/emitir_movilidad.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const responseText = await response.text();
      let data = null;
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('Respuesta no JSON desde emitir_movilidad.php', {
          status: response.status,
          body: responseText
        });
        throw parseError;
      }
      console.log('data', data);

      if (data.linkDePago) {
        console.log('linkDePago', data.linkDePago);
        window.location.href = data.linkDePago;
      } else if (data.error === 'auth_failed' && [502, 503].includes(Number(data.http))) {
        toast.error(
          data.mensaje
            || 'El servicio del cotizador no está disponible en este momento. Intente más tarde o contacte a la aseguradora.',
          { position: 'bottom-left', autoClose: 8000, theme: 'light' }
        );
        resetCaptchaAndDisableSubmit();
      } else {
        showErrorToast();
        resetCaptchaAndDisableSubmit();
      }
    } catch (error) {
      console.log('error', error);
      showErrorToast();
      resetCaptchaAndDisableSubmit();
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'form-control text-dark bg-white';

  return (
    <section id="contratar-movilidad">
      <div className="container-lg py-5 text-light">
        <div className="text-center">
          <h1 className="text-light mb-0">Contratar</h1>
          <p className="text-light mb-2 fst-italic">Contrata tu seguro de movilidad alternativa de forma sencilla y ágil</p>
        </div>

        <div className="row mx-0 justify-content-center mt-4 mt-md-5">
          <div className="col-11 col-sm-10 col-md-6 p-0 text-center">
            <form id="contact-form" className="contact-form-light" onSubmit={handleSubmit}>
              <fieldset disabled={loading} className="border-0 m-0 p-0">
              <div className="row mx-0">
                <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-person-fill text-dark" />
                    </span>
                    <input type="text" name="nombreORazonSocial" id="nombreORazonSocial" className={inputClass} placeholder="Nombre" required />
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-person-fill text-dark" />
                    </span>
                    <input type="text" name="apellido" id="apellido" className={inputClass} placeholder="Apellido" required />
                  </div>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
                  <div className="mb-3 input-group">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-credit-card text-dark" />
                    </span>
                    <select className="form-select text-dark bg-white" id="tipoDeDocumento" name="tipoDeDocumento" defaultValue="" required>
                      <option value="" disabled>Tipo de documento</option>
                      <option value="CI">CI</option>
                      <option value="RUT">RUT</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-hash text-dark" />
                    </span>
                    <input type="text" name="numeroDeDocumentoODeRut" id="numeroDeDocumentoODeRut" className={inputClass} placeholder="Número de documento" required />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <i className="bi bi-calendar-event text-dark" />
                </span>
                <div className="form-floating flex-grow-1">
                  <input
                    type="date"
                    name="fechaDeNacimiento"
                    id="fechaDeNacimiento"
                    className="form-control text-dark bg-white"
                    placeholder=" "
                    max={todayStr}
                    required
                  />
                  <label htmlFor="fechaDeNacimiento" className="text-dark">Fecha De Nacimiento</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <i className="bi bi-envelope-fill text-dark" />
                </span>
                <input type="email" name="correoElectronico" id="correoElectronico" className={inputClass} placeholder="Correo electrónico" required />
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-phone-fill text-dark" />
                </span>
                <input type="number" name="celular" id="celular" className={inputClass} placeholder="Celular" required />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <i className="bi bi-geo-alt-fill text-dark" />
                </span>
                <input type="text" name="calle" id="calle" className={inputClass} placeholder="Calle" required />
              </div>

              <div className="row mx-0">
                <div className="col-12 col-md-4 ps-0 pe-0 pe-md-1">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-house-door-fill text-dark" />
                    </span>
                    <input type="text" name="numeroDePuerta" id="numeroDePuerta" className={inputClass} placeholder="Número de puerta" required />
                  </div>
                </div>
                <div className="col-12 col-md-4 ps-0 px-md-1 pe-0">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-building text-dark" />
                    </span>
                    <input type="text" name="apartamento" id="apartamento" className={inputClass} placeholder="Número de apartamento" />
                  </div>
                </div>
                <div className="col-12 col-md-4 ps-0 ps-md-1 pe-0">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-mailbox text-dark" />
                    </span>
                    <input type="number" name="codigoPostal" id="codigoPostal" className={inputClass} placeholder="Código postal" required />
                  </div>
                </div>
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-map-fill text-dark" />
                </span>
                <select className="form-select text-dark bg-white" id="departamento" name="departamento" defaultValue="" required>
                  <option value="" disabled>Departamento</option>
                  {URUGUAY_DEPARTAMENTOS.map((dep) => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <i className="bi bi-calendar-check text-dark" />
                </span>
                <div className="form-floating flex-grow-1">
                  <input
                    type="date"
                    name="inicioDeVigencia"
                    id="inicioDeVigencia"
                    className="form-control text-dark bg-white"
                    placeholder=" "
                    min={todayStr}
                    required
                  />
                  <label htmlFor="inicioDeVigencia" className="text-dark">Inicio De Póliza</label>
                </div>
              </div>

              <div className="row mx-0">
                <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-tag-fill text-dark" />
                    </span>
                    <input type="text" name="marca" id="marca" className={inputClass} placeholder="Marca" required />
                  </div>
                </div>
                <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-box-seam text-dark" />
                    </span>
                    <input type="text" name="modelo" id="modelo" className={inputClass} placeholder="Modelo" required />
                  </div>
                </div>
              </div>

              <div className="mb-3 input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-cash-stack text-dark" />
                </span>
                <select
                  className="form-select text-dark bg-white"
                  id="valorVehiculoDispositivo"
                  name="valorVehiculoDispositivo"
                  defaultValue=""
                  required
                  onChange={(e) => {
                    setValorAsegurado(PAQUETES_VALOR_VEHICULO_DISPOSITIVO.find((paquete) => paquete.id === e.target.value)?.valorAsegurado);
                    setPrecio(PAQUETES_VALOR_VEHICULO_DISPOSITIVO.find((paquete) => paquete.id === e.target.value)?.precio);
                  }}
                >
                  <option value="" disabled>Valor del vehículo/dispositivo</option>
                  {PAQUETES_VALOR_VEHICULO_DISPOSITIVO.map((paquete) => (
                    <option key={paquete.id} value={paquete.id}>{paquete.nombre}</option>
                  ))}
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <i className="bi bi-123 text-dark" />
                </span>
                <input type="text" name="numeroDeSerie" id="numeroDeSerie" className={inputClass} placeholder="Número de serie" required />
              </div>

              <div className="mb-3">
                <div
                  className="position-relative d-flex align-items-center bg-light bg-opacity-50 border-2 rounded-2 px-3 py-2"
                  style={{ borderStyle: 'dashed', minHeight: '84px' }}
                >
                  <input
                    ref={facturaInputRef}
                    type="file"
                    name="facturaDeCompra"
                    id="facturaDeCompra"
                    className="position-absolute top-0 start-0 z-1 m-0 h-100 w-100 cursor-pointer p-0 opacity-0"
                    accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    aria-label="Factura de compra"
                    onChange={(e) => setNombreArchivoFactura(e.target.files?.[0]?.name ?? '')}
                  />
                  <div className="d-flex align-items-center gap-2 overflow-auto pe-none">
                    <span className="btn btn-sm btn-outline-primary-dark pointer-events-none">
                      Subir archivo
                    </span>
                    <span className={`text-truncate ${nombreArchivoFactura ? 'text-dark' : 'text-muted'} pointer-events-none`}>
                      {nombreArchivoFactura || 'No ha seleccionado ningún archivo'}
                    </span>
                  </div>
                </div>

                <p className="text-start small my-0 text-light fst-italic opacity-75">Tamaño máximo: 10 MB. Formatos permitidos: PDF, DOC, DOCX, PNG, JPEG, JPG, etc.</p>
              </div>
              </fieldset>
            </form>
          </div>

          <div className="col-11 col-sm-10 col-md-6 px-0 ps-md-4 text-center">
            <div className="bg-light text-dark px-3 py-3 text-start rounded-3  position-relative">
              <div className="d-block d-sm-flex justify-content-between align-items-center mb-1">
                <h2 className="text-primary-dark fw-semibold mb-0">Cobertura</h2>
                <h2 className="text-primary-dark fw-semibold mb-0">USD {formatIntegerWithDotThousands(precio) ?? '-'}</h2>
              </div>

              <ul className="list-unstyled mb-0">
                <li key="hurto" className="d-block d-sm-flex py-2 border-bottom justify-content-between align-items-center">
                  <p className="mb-0 ">Hurto</p>
                  <p className="mb-0 text-primary-dark fw-semibold">USD {formatIntegerWithDotThousands(valorAsegurado) ?? '-'}</p>
                </li>

                <li key="incendio" className="d-block d-sm-flex py-2 border-bottom justify-content-between align-items-center">
                  <p className="mb-0 ">Incendio</p>
                  <p className="mb-0 text-primary-dark fw-semibold">USD {formatIntegerWithDotThousands(valorAsegurado) ?? '-'}</p>
                </li>

                <li key="accidentes-personales" className="d-block d-sm-flex py-2 border-bottom justify-content-between align-items-center">
                  <p className="mb-0 ">Accidentes Personales</p>
                  <p className="mb-0 text-primary-dark fw-semibold">USD 5.000</p>
                </li>

                <li key="responsabilidad-civil" className="d-block d-sm-flex py-2 justify-content-between align-items-center">
                  <p className="mb-0 ">Responsabilidad Civil</p>
                  <p className="mb-0 text-primary-dark fw-semibold">USD 10.000</p>
                </li>
              </ul>

              <div className="border-top border-2 border-primary-dark pt-2">
                <p className="text-primary-dark fw-medium mb-0">Información Importante</p>
                <p className="small mb-0">Para activar la cobertura es necesario cargar la factura de compra o foto del vehículo que vas a asegurar. Coberturas sin deducible. No incluye cobertura de daños materiales para tu vehículo.</p>
              </div>

              <div className="d-flex justify-content-center my-2">
                <a
                  href={condicionesPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-policy-link privacy-policy-link-dark"
                  download
                >
                  <i className="bi bi-download me-2 text-dark" />
                  <span className="small text-dark fst-italic mt-1">Descargar Condiciones</span>
                </a>
              </div>

              <ReCAPTCHA
                sitekey={GOOGLE_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={enableContactFormButton}
                onExpired={disableContactFormButton}
                className="d-flex justify-content-center mt-3"
                size={window.innerWidth < 400 ? 'compact' : 'normal'}
              />

              <div className="text-center mt-3">
                <button id="contact-form-button" type="submit" form="contact-form" className="btn btn-outline-primary-dark rounded-pill w-25" disabled={!captchaReady || loading}>
                  {loading ? 'Enviando…' : 'Contratar'}
                </button>

                {/* Modal is in PrivacyPolicyModal component */}
                <a href="#contact-form" className="privacy-policy-link privacy-policy-link-dark" alt="politica-de-privacidad" data-bs-toggle="modal" data-bs-target="#privacy-policy-modal">
                  <p className="small text-dark fst-italic mt-1">Política de privacidad</p>
                </a>
              </div>

              {loading && (
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center rounded-3"
                  style={{ backgroundColor: 'rgba(7, 22, 34, 0.55)', zIndex: 20 }}
                >
                  <div className="d-flex align-items-center gap-2 text-primary-light">
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden />
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden />
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden />
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden />
                  </div>
                </div>
              )}
            </div>

            <div className="accordion accordion-flush panel-group mt-4 px-4" id="accordionFlushExample">
              <div className="accordion-item panel bg-transparent border border-2 border-light">
                <h2 className="accordion-header panel-heading" id="flush-headingOne">
                  <button className="accordion-button collapsed panel-title rounded-2 text-center bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Hurto
                    <span> </span>
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse panel-collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body text-light px-2 pt-0 fst-italic">Esta cobertura te brinda protección contra el riesgo de hurto con <strong>intimidacion y/o violencia</strong> de tu vehículo. Disfrutá de tranquilidad y seguridad en tus desplazamientos, sabiendo que tu vehículo está protegido contra la apropiación ilegítima por parte de terceros.</div>
                </div>
              </div>


              <div className="accordion-item panel bg-transparent border border-2 border-light">
                <h2 className="accordion-header panel-heading" id="flush-headingTwo">
                  <button className="accordion-button collapsed panel-title rounded-2 text-center bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Incendio
                    <span> </span>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse panel-collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body text-light px-2 pt-0 fst-italic">Con la póliza de seguro de movilidad alternativa  obtenés una cobertura completa contra daños materiales causados  por incendio y/o explosión.</div>
                </div>
              </div>

              <div className="accordion-item panel bg-transparent border border-2 border-light">
                <h2 className="accordion-header panel-heading" id="flush-headingThree">
                  <button className="accordion-button collapsed panel-title rounded-2 text-center bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accidentes Personales
                    <span> </span>
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse panel-collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body text-light px-2 pt-0 fst-italic">Ofrece respaldo financiero en determinado tipo de lesiones, permitiéndote viajar con la confianza de saber que estás protegido en todo momento. Esta cobertura solo aplica para personas entre 16 y 65 años.</div>
                </div>
              </div>

              <div className="accordion-item panel bg-transparent border border-2 border-light">
                <h2 className="accordion-header panel-heading" id="flush-headingFour">
                  <button className="accordion-button collapsed panel-title rounded-2 text-center bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Responsabilidad Civil
                    <span> </span>
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse panel-collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body text-light px-2 pt-0 fst-italic">Estarás cubierto en caso de  que tu vehículo ocasione daños a terceros , proporcionándote seguridad y tranquilidad.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PrivacyPolicyModal />

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </section>
  );
};

export default ContratarMovilidad;
