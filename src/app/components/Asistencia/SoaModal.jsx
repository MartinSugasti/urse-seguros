import bseImage from '../../../assets/images/companies_logos/bse.svg';
import hdiImage from '../../../assets/images/companies_logos/hdi.svg';
import mapfreImage from '../../../assets/images/companies_logos/mapfre.svg';
import portoImage from '../../../assets/images/companies_logos/porto.svg';
import sancorImage from '../../../assets/images/companies_logos/sancor.svg';
import suraImage from '../../../assets/images/companies_logos/sura.svg';
import surcoImage from '../../../assets/images/companies_logos/surco.png';

// For opening the modal, parent component needs an element like the following:
// <a
//   href="#intro"
//   className="soa-link btn btn-outline-primary-dark rounded-pill mt-2"
//   alt="imprimir-soa"
//   data-bs-toggle="modal"
//   data-bs-target="#soa-modal"
// >
//   <p className="my-0">SOA y Carta Verde</p>
// </a>

const SoaModal = () => (
  <div className="modal fade" id="soa-modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content bg-light text-dark p-1 p-sm-2 p-lg-3">
        <div className="modal-header border-0">
          <h4 className="modal-title ms-auto" id="modal-contacto-companias-title">Certificado SOA y Mercosur (carta verde)</h4>
          <button type="button" className="btn-close me-n3 mt-n5" data-bs-dismiss="modal" aria-label="Close" />
        </div>

        <div className="modal-body">
          <p>
            Para acceder a tus certificados en algunas compañías tendrás que estar registrado:
          </p>

          <div className="row mx-0 mt-4 mb-4 justify-content-center g-2">
            <a href="https://www.bse.com.uy/portal-comercial/seguros/seguros-vehiculos/certificado-soa-app" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-1 rounded-2 shadow text-decoration-none">
              <div className="text-center align-content-center">
                <p className="mb-0 pb-0 text-dark fst-italic small">Certificado SOA</p>
                <img src={bseImage} className="m-auto" alt="bse-logo" />
              </div>
            </a>

            <a href="https://www.bse.com.uy/portal-comercial/seguros/seguros-vehiculos/carta-verde/" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-1 rounded-2 shadow text-decoration-none">
              <div className="text-center align-content-center">
                <p className="mb-0 pb-0 text-dark fst-italic small">Certificado Mercosur</p>
                <img src={bseImage} className="m-auto" alt="bse-logo" />
              </div>
            </a>

            <a href="tel:08008500" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={sancorImage} className="m-auto" alt="sura-logo" />
              </div>
            </a>

            <a href="https://servicios.portoseguro.com.uy/oficinavirtualasegurado/paginas/login" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={portoImage} className="m-auto" alt="porto-logo" />
              </div>
            </a>

            <a href="https://www.hdi.com.uy/descargue-su-poliza/" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={hdiImage} className="m-auto" alt="hdi-logo" />
              </div>
            </a>

            <a href="https://www.segurossura.com.uy/mi-escritorio/login" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={suraImage} className="m-auto" alt="sura-logo" />
              </div>
            </a>

            <a href="https://www.surco.com.uy/servicio-al-cliente/miseguro.html" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={surcoImage} className="m-auto" alt="surco-logo" />
              </div>
            </a>

            <a href="https://clientes.mapfre.com.uy/security/login" alt="link-to-company-page" target="_blank" rel="noreferrer" className="col-9 col-sm-5 d-flex justify-content-center border m-2 p-3 rounded-2 shadow">
              <div>
                <img src={mapfreImage} className="m-auto" alt="mapfre-logo" />
              </div>
            </a>
          </div>

          <p>
            Por inconvenientes o para obtener el certificado de otras compañías, contáctenos directamente a través de alguna de las siguientes vías:
          </p>

          <div className="my-4">
            <p className="mb-1">
              <a
                href="https://wa.me/59899804290"
                className="mobile-link text-primary-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp me-2" />
                099804290
              </a>
            </p>
            <p className="mb-1">
              <a className="mobile-link text-primary-dark" href="tel:43525955">
                <i className="bi bi-telephone-fill me-2" />
                43525955
              </a>
            </p>
            <p className="mb-1">
              <a
                href="mailto:info@urseseguros.com.uy"
                className="email-link text-primary-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-fill me-2" />
                info@urseseguros.com.uy
              </a>
            </p>
          </div>

          <p>
            O acercate a nuestras oficinas en:
          </p>

          <div>
            <p className="mb-1">
                <a
                  href="https://www.google.com/maps/place/Urse+Seguros/@-34.0964304,-56.2206326,17z/data=!3m1!4b1!4m6!3m5!1s0x95a102b102dfbe13:0x106d75498505972f!8m2!3d-34.0964304!4d-56.2180577!16s%2Fg%2F1ptwh97l_"
                  className="address-link text-primary-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-signpost me-2" />
                  Ursino Barreiro 3452, Florida, Uruguay
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SoaModal;