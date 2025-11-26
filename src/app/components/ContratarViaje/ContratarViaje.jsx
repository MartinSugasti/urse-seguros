import condicionesPdf from '../../../assets/docs/condiciones.pdf';
import guiaCoberturaPdf from '../../../assets/docs/guia_cobertura.pdf';

const ContratarViaje = () => (
  <section id="contratar-viaje">
    <div className="container-lg py-5 text-light">
      <div className="row mx-0 justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="text-center">
            <h1 className="text-light mb-0">Contratar</h1>
            <p className="text-light mb-2 fst-italic">Información importante antes de contratar</p>
          </div>

          <p className="mt-3 mt-md-4 mb-3">
            Si tienes condiciones pre-existentes como enfermedades crónicas recuerda que las mismas están cubiertas si han estado
            estables en los últimos 6 meses, lo que implica:
          </p>

          <ul className="mb-4">
            <li>No haber tenido cambios en el tratamiento.</li>
            <li>No haber presentado síntomas nuevos.</li>
            <li>No haber necesitado hospitalizaciones, urgencias o ajustes de medicamentos.</li>
          </ul>

          <p className="mb-2">
            Por más información de las coberturas accede aquí:{' '}
            <a
              href={condicionesPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-underline"
            >
              Condiciones Generales
            </a>
            .
          </p>

          <p className="mb-4">
            Descarga aquí como utilizar la cobertura:{' '}
            <a
              href={guiaCoberturaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-underline"
            >
              Guía De Coberturas
            </a>
            .
          </p>

          <div className="mb-4 p-3 rounded-3 bg-dark bg-opacity-25">
            <p className="mb-0 fw-bold">
              Código <span className="text-uppercase">PROMOWEB</span>: 10% de descuento.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://app.urbanglobaltravel.com/cotizadorweb/URSE-SEGUROS?datakey="
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-pill px-4"
            >
              Contratar
            </a>
            <br />
            <small>Seras redirigido a la pagina de Urban Gloabal Travel</small>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContratarViaje;