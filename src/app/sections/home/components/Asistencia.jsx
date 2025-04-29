import AccidentModal from './AccidentModal';
import SoaModal from './SoaModal';

import accidenteImage from '../../../../assets/images/others/accidente.svg';
import soaImage from '../../../../assets/images/others/soa.svg';

const Asistencia = () => (
  <section id="asistencia">
    <div className="container-lg pt-5">
      <div className="row mx-0 justify-content-around align-items-center">
        <div className="col-12 col-md-4 text-center">
          <h2 className="text-light mb-0">¿Tuviste un siniestro?</h2>

          <div className="links-container">
            <a href="#main-intro" className="accident-link btn btn-danger rounded-pill mt-2" alt="en-caso-de-accidente" data-bs-toggle="modal" data-bs-target="#accident-modal">
              <p className="my-0">En Caso De Siniestro</p>
            </a>
          </div>
        </div>

        <div className="col-8 col-sm-6 col-md-4 text-center mt-4 mt-md-0">
          <img src={accidenteImage} className="img-fluid" alt="accident" />
        </div>
      </div>

      <div className="row mx-0 justify-content-around align-items-center mt-5 mt-md-0">
        <div className="col-12 col-md-4 text-center">
          <h2 className="text-light mb-0">¿Viajas al exterior?</h2>

          <div className="links-container">
            <a href="#main-intro" className="soa-link btn btn-outline-light rounded-pill mt-2" alt="certificado-soa" data-bs-toggle="modal" data-bs-target="#soa-modal">
              <p className="my-0">SOA Y Certificado Mercosur</p>
            </a>
          </div>
        </div>

        <div className="col-8 col-sm-6 col-md-4 text-center mt-4 mt-md-0 order-md-first">
          <img src={soaImage} className="img-fluid" alt="soa" />
        </div>
      </div>
    </div>

    <AccidentModal />
    <SoaModal />
  </section>
);

export default Asistencia;
