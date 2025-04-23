import SoaModal from './SoaModal';

import soaImage from '../../../../assets/images/others/soa.svg';

const Soa = () => (
  <section id="soa">
    <div className="container-lg">
      <div className="row mx-0 g-4 justify-content-around align-items-center">
        <div className="col-12 col-md-6 text-center mt-5 mt-md-0">
          <h2 className="text-light mb-0">¿Viajas al exterior?</h2>

          <div className="links-container">
            <a href="#main-intro" className="soa-link btn btn-outline-light rounded-pill mt-2" alt="certificado-soa" data-bs-toggle="modal" data-bs-target="#soa-modal">
              <p className="my-0">SOA Y Certificado Mercosur</p>
            </a>
          </div>
        </div>

        <div className="col-8 col-md-4 text-center mt-0 order-md-first">
          <img src={soaImage} className="img-fluid" alt="soa" />
        </div>
      </div>
    </div>

    <SoaModal />
  </section>
);

export default Soa;
