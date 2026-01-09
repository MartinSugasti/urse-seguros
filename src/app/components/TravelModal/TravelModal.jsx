import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

import condicionesPdf from '../../../assets/docs/condiciones.pdf';
import guiaCoberturaPdf from '../../../assets/docs/guia_cobertura.pdf';

const TravelModal = () => {
  const modalRef = useRef(null);
  const bootstrapModalRef = useRef(null);

  useEffect(() => {
    // Check if user came from urbanglobaltravel
    const referrer = document.referrer.toLowerCase();
    const isFromUrbantravel = referrer.includes('urbanglobaltravel');

    // Expiration time in milliseconds (1 minute)
    const EXPIRATION_TIME = 60 * 1000;

    // Check if modal has already been shown and if it hasn't expired
    const modalShownData = sessionStorage.getItem('travelModalShown');
    let hasBeenShown = false;

    if (modalShownData) {
      try {
        const { timestamp } = JSON.parse(modalShownData);
        const now = Date.now();
        // Check if expiration time has passed
        if (now - timestamp < EXPIRATION_TIME) {
          hasBeenShown = true;
        } else {
          // Expired, remove the old data
          sessionStorage.removeItem('travelModalShown');
        }
      } catch (error) {
        // If parsing fails, treat as not shown
        sessionStorage.removeItem('travelModalShown');
      }
    }

    // Initialize modal instance
    const modalElement = modalRef.current;
    if (modalElement && !bootstrapModalRef.current) {
      bootstrapModalRef.current = new Modal(modalElement, {
        backdrop: true,
        keyboard: true
      });

      // Handle modal cleanup when hidden (backdrop removal as safeguard)
      const handleHidden = () => {
        // Ensure backdrop is removed if Bootstrap didn't clean it up
        setTimeout(() => {
          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) {
            backdrop.remove();
          }
          // Bootstrap should handle body class/styles, but we ensure cleanup if needed
          if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }
        }, 150);
      };

      modalElement.addEventListener('hidden.bs.modal', handleHidden);
    }

    if (isFromUrbantravel && !hasBeenShown && bootstrapModalRef.current) {
      // Show the modal after a short delay to ensure DOM is ready
      setTimeout(() => {
        if (bootstrapModalRef.current && modalElement) {
          bootstrapModalRef.current.show();

          // Mark as shown in sessionStorage with timestamp
          const timestamp = Date.now();
          sessionStorage.setItem('travelModalShown', JSON.stringify({ timestamp }));
        }
      }, 100);
    }

    // Cleanup function
    return () => {
      if (bootstrapModalRef.current) {
        bootstrapModalRef.current.dispose();
        bootstrapModalRef.current = null;
      }
      // Clean up backdrop and body classes on unmount
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  return (
    <div ref={modalRef} className="modal fade" id="travel-modal" tabIndex="-1" aria-labelledby="travel-modal-title" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light text-dark p-1 p-sm-2 p-lg-3">
          <div className="modal-header border-0 mb-n3">
            <h4 className="modal-title ms-auto" id="travel-modal-title">Disfruta de tu viaje!</h4>
            <button
              type="button"
              className="btn-close me-n3 mt-n5"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <div className="text-center mb-4">
              <p className="fs-5 mb-4">Aquí encontrarás información importante sobre tu seguro de viaje:</p>
            </div>

            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-6">
                <div className="card bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-4 h-100 text-center">
                  <i className="bi bi-file-earmark-pdf fs-1 text-primary-dark mb-3" />
                  <h5 className="card-title mb-3">Condiciones</h5>
                  <p className="card-text mb-3">
                    Descarga las condiciones generales de la cobertura
                  </p>
                  <a
                    href={condicionesPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill"
                    download
                  >
                    <i className="bi bi-download me-2" />
                    Descargar
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card bg-secondary-light bg-opacity-25 border border-2 border-secondary-dark rounded p-4 h-100 text-center">
                  <i className="bi bi-file-earmark-text fs-1 text-primary-dark mb-3" />
                  <h5 className="card-title mb-3">Guía de Cobertura</h5>
                  <p className="card-text mb-3">
                    Descarga una guía sobre cómo utilizar la cobertura
                  </p>
                  <a
                    href={guiaCoberturaPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill"
                    download
                  >
                    <i className="bi bi-download me-2" />
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelModal;
