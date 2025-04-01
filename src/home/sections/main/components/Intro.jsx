import AccidentModal from './AccidentModal';
import SoaModal from './SoaModal';

import familyImage from '../../../../assets/images/others/family.png';

const Intro = () => (
  <section id="main-intro" className="bg-light">
    <div className="container-lg py-5">
      <div className="row mx-0 g-4 justify-content-around align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="text-dark mb-0">Especialistas en Seguros</h1>
          <p className="text-muted mb-2 fst-italic">Lideres en servicios desde 1987</p>

          <div className="links-container">
            <a href="#main-intro" className="accident-link btn btn-danger rounded-pill mt-2" alt="en-caso-de-accidente" data-bs-toggle="modal" data-bs-target="#accident-modal">
              <p className="my-0">En Caso De Siniestro</p>
            </a>

            <br />

            <a href="#main-intro" className="soa-link btn btn-outline-primary-dark rounded-pill mt-2" alt="certificado-soa" data-bs-toggle="modal" data-bs-target="#soa-modal">
              <p className="my-0">SOA Y Carta Verde</p>
            </a>
          </div>
        </div>

        <div className="col-6 col-md-4 text-center">
          <img src={familyImage} className="img-fluid" alt="family" />
        </div>
      </div>
    </div>

    <AccidentModal />
    <SoaModal />
  </section>
);

export default Intro;
