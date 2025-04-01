import bseImage from '../../../../assets/images/companies_logos/bse.svg';
import hdiImage from '../../../../assets/images/companies_logos/hdi.svg';
import mapfreImage from '../../../../assets/images/companies_logos/mapfre.svg';
import portoImage from '../../../../assets/images/companies_logos/porto.svg';
import sanCristobalImage from '../../../../assets/images/companies_logos/san_cristobal.svg';
import sancorImage from '../../../../assets/images/companies_logos/sancor.svg';
import suraImage from '../../../../assets/images/companies_logos/sura.svg';
import sbiImage from '../../../../assets/images/companies_logos/sbi.svg';
import surcoImage from '../../../../assets/images/companies_logos/surco.png';
import berkleyImage from '../../../../assets/images/companies_logos/berkley.png';

// For opening the modal, parent component needs an element like the following:
// <a
//   href="#intro"
//   className="accident-link btn btn-danger rounded-pill mt-2"
//   alt="en-caso-de-accidente"
//   data-bs-toggle="modal"
//   data-bs-target="#accident-modal"
// >
//   <p className="my-0">En caso de siniestro</p>
// </a>

const AccidentModal = () => (
  <div className="modal fade" id="accident-modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content bg-light text-dark p-1 p-sm-2 p-lg-3">
        <div className="modal-header border-0 mb-n3">
          <h4 className="modal-title ms-auto" id="modal-contacto-companias-title">En caso de siniestro o auxilio mecánico:</h4>
          <button type="button" className="btn-close me-n3 mt-n5" data-bs-dismiss="modal" aria-label="Close" />
        </div>

        <div className="modal-body">
          <div className="">
            <div className="bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-2">
              <p className="mb-0">
                1 - Si hay lesionados prestar asistencia médica y efectuar la denuncia policial
              </p>
            </div>

            <div className="bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-2 mt-3">
              <p className="mb-0">
                2 - Realizar denuncia en la compañía de seguros en forma inmediata
              </p>
            </div>

            <div className="bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-2 mt-3">
              <p className="mb-0">
                3 - En casos de existencia de personas lesionadas, robo o incendio de su vehículo, es imprescindible realizar la denuncia policial
              </p>
            </div>

            <div className="bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-2 mt-3">
              <p className="mb-0">
                4 - Si hay terceros involucrados, recomendamos solicitar los siguientes datos: nombre, cédula, teléfono, matrícula y seguro del conductor
              </p>
            </div>
          </div>

          <p className="bg-warning-subtle bg-opacity-25 border border-2 border-warning-subtle rounded p-2 mt-3">
            Si viajas al exterior recuerda llevar toda la documentación, incluido el Certificado Mercosur (carta verde).
          </p>

          <div className="mt-5">
            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.bse.com.uy/portal-comercial/" alt="link-to-bse-page" target="_blank" rel="noreferrer">
                  <img src={bseImage} className="m-auto" alt="bse-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08001994">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-1994
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59898611998">
                    <i className="bi bi-whatsapp me-1" />
                    098-611-998
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59826141555">(+598) 2614-1555</a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.sancorseguros.com.uy/" alt="link-to-sancor-page" target="_blank" rel="noreferrer">
                  <img src={sancorImage} className="m-auto" alt="sancor-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08008500">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-8500
                  </a>
                  <br />
                  <a className="text-primary-dark" href="https://wa.me/59893334000">
                    <i className="bi bi-whatsapp me-1" />
                    093-334-000
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59826280444">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2628-0444
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.portoseguro.com.uy/" alt="link-to-porto-page" target="_blank" rel="noreferrer">
                  <img src={portoImage} className="m-auto" alt="porto-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:24878616">
                    <i className="bi bi-telephone-fill me-1" />
                    2487-8616
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59827093333">
                    <i className="bi bi-whatsapp me-1" />
                    2709-3333
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59824878616">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2487-8616
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.hdi.com.uy/" alt="link-to-hdi-page" target="_blank" rel="noreferrer">
                  <img src={hdiImage} className="m-auto" alt="hdi-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08002777">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-2777
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59826188000">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2618-8000
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://sura.com.uy/" alt="link-to-sura-page" target="_blank" rel="noreferrer">
                  <img src={suraImage} className="m-auto" alt="sura-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08008120">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-8120
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59893670000">
                    <i className="bi bi-whatsapp me-1" />
                    093-670-000
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59826059020">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2605-9020
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.surco.com.uy/" alt="link-to-surco-page" target="_blank" rel="noreferrer">
                  <img src={surcoImage} className="m-auto" alt="surco-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08001320">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-1320
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59827090089">
                    <i className="bi bi-whatsapp me-1" />
                    2709-0089
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59829159671">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2915-9671
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.berkley.com.uy/" alt="link-to-berkley-page" target="_blank" rel="noreferrer">
                  <img src={berkleyImage} className="m-auto" alt="berkley-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08008542">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-8542
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59829040658">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2904-0658
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.mapfre.com.uy/" alt="link-to-mapfre-page" target="_blank" rel="noreferrer">
                  <img src={mapfreImage} className="m-auto" alt="mapfre-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08007424">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-7424
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59893627373">
                    <i className="bi bi-whatsapp me-1" />
                    093-627-373
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59829169245">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2916-9245
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center border border-1 border-end-0 border-start-0 border-top-0 pb-4 mb-4">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.sancristobalseguros.com.uy" alt="link-to-san-cristobal-page" target="_blank" rel="noreferrer">
                  <img src={sanCristobalImage} className="m-auto" alt="san-cristobal-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08008831">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-8831
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59898029999">
                    <i className="bi bi-whatsapp me-1" />
                    98-029-999
                  </a>
                </p>
                <p className="mb-0 mt-3">Desde el exterior:</p>
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:+59829029999">
                    <i className="bi bi-telephone-fill me-1" />
                    (+598) 2902-9999
                  </a>
                </p>
              </div>
            </div>

            <div className="row align-items-center justify-content-center pb-2 pb-sm-0">
              <div className="d-flex justify-content-center col-6">
                <a href="https://www.sbi.uy/" alt="link-to-sbi-page" target="_blank" rel="noreferrer">
                  <img src={sbiImage} className="m-auto" alt="sbi-logo" />
                </a>
              </div>

              <div className="col-6 small text-center">
                <br />
                <p className="mb-0">
                  <a className="text-primary-dark" href="tel:08000724">
                    <i className="bi bi-telephone-fill me-1" />
                    0800-0724
                  </a>

                  <br />

                  <a className="text-primary-dark" href="https://wa.me/59894724724">
                    <i className="bi bi-whatsapp me-1" />
                    094-724-724
                  </a>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccidentModal;
