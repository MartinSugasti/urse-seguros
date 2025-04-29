import AccidentModal from './AccidentModal';

import accidenteImage from '../../../../assets/images/others/accidente.svg';

const Accidente = () => (
  <section id="accidente">
    <div className="container-lg">
      <div className="row mx-0 justify-content-around align-items-center">
        <div className="col-12 col-md-4 text-center mt-5 mt-md-0">
          <h2 className="text-light mb-0">¿Tuviste un siniestro?</h2>

          <div className="links-container">
            <a href="#main-intro" className="accident-link btn btn-danger rounded-pill mt-2" alt="en-caso-de-accidente" data-bs-toggle="modal" data-bs-target="#accident-modal">
              <p className="my-0">En Caso De Siniestro</p>
            </a>
          </div>
        </div>

        <div className="col-8 col-sm-6 col-md-4 text-center mt-0">
          <img src={accidenteImage} className="img-fluid" alt="accident" />
        </div>
      </div>
    </div>

    <AccidentModal />
  </section>
);

export default Accidente;
