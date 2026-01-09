import condicionesPdf from '../../../assets/docs/condiciones.pdf';
import guiaCoberturaPdf from '../../../assets/docs/guia_cobertura.pdf';

const ContratarViaje = () => (
  <section id="contratar-viaje">
    <div className="container-lg py-5 text-light">
      <div className="text-center">
        <h1 className="text-light mb-0">Contratar</h1>
        <p className="text-light mb-2 fst-italic">Información importante antes de contratar</p>
      </div>

      <div className="justify-content-center mt-4 px-2 px-sm-4 py-3 py-sm-4 rounded-3 text-dark bg-warning-subtle border border-2 border-warning">
        <p>
          Si tienes condiciones pre-existentes como enfermedades crónicas recuerda que las mismas están cubiertas si han estado
          estables en los últimos 6 meses, lo que implica:
        </p>

        <ul className="mb-0">
          <li>No haber tenido cambios en el tratamiento</li>
          <li>No haber presentado síntomas nuevos</li>
          <li>No haber necesitado hospitalizaciones, urgencias o ajustes de medicamentos</li>
        </ul>
      </div>

      <div className="row mx-0 gy-4 justify-content-center mt-0">
        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-chat-dots" />
                <h5 className="card-title">Condiciones</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">
                  Descarga
                  {' '}
                  <a
                    href={condicionesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline"
                  >
                    aquí
                  </a>
                  {' '}
                  las condiciones generales de la cobertura
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-compass" />
                <h5 className="card-title">Guía</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">
                  Descarga
                  {' '}
                  <a
                    href={guiaCoberturaPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline"
                  >
                    aquí
                  </a>
                  {' '}
                  una guía sobre como utilizar la cobertura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-3 bg-dark bg-opacity-50">
        <div className="mb-0 text-center">
          <p className="mb-0">Accede a un 10% de descuento con el código</p>
          <div className="tooltipy mb-0">
            <span className="text-uppercase fw-bold">PROMOWEB</span>
            <i className="bi bi-info-circle ms-2" />
            <span className="tooltiptext ms-2 px-3 py-2 mb-2 rounded-2 shadow">Debes utilizarlo en la página de pago</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="mb-0">Seras redirigido a la página de Urban Global Travel para continuar con el proceso</p>
      </div>

      <div className="mt-4 text-center">
        <a
          href="https://app.urbanglobaltravel.com/cotizadorweb/URSE-SEGUROS?datakey="
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light rounded-pill px-5"
        >
          Contratar
        </a>
      </div>
    </div>
  </section>
);

export default ContratarViaje;