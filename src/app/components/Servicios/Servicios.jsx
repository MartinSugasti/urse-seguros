const Servicios = () => (
  <section id="servicios">
    <div className="container-lg py-5">
      <div className="text-center">
        <h1 className="text-light mb-0">Servicios</h1>
        <p className="text-light mb-2 fst-italic">Soluciones pensadas para tu comodidad</p>
      </div>

      <div className="row mx-0 gy-4 justify-content-center mt-4">
        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-signpost-2" />
                <h5 className="card-title">Siniestros</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">En caso de siniestro, gestionamos y realizamos el seguimiento frente a las compañías acompañándote en todo momento hasta la finalización del mismo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-5 col-md-4 col-xl-3 me-xl-1">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-wallet2" />
                <h5 className="card-title">Cobranzas</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">Te haremos llegar un aviso para evitar el cese de la cobertura, en caso de no pagar en fecha</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-arrow-clockwise" />
                <h5 className="card-title">Renovaciones</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">Al llegar el vencimiento de la póliza cotizamos en todas las compañías asegurándote los mejores costos/beneficios</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-compass" />
                <h5 className="card-title">Asesoramiento</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">Te informamos y asesoramos sobre todo tipo de seguros, productos y compañías que mejor se adapte a tus necesidades y posibilidades</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-5 col-md-4 col-xl-3">
          <div className="card bg-light rounded-4 text-center border-0 shadow-lg h-100">
            <div className="card-body d-flex flex-column">
              <div>
                <i className="bi fa-2x bi-chat-dots" />
                <h5 className="card-title">Comunicación</h5>
              </div>
              <div className="my-auto">
                <p className="card-text">Puedes hacer tus consultas desde donde te encuentres a través de la web, whatsapp, redes sociales o puedes acercarte a nuestras oficinas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Servicios;
