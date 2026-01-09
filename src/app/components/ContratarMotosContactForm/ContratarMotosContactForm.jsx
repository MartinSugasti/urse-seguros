import { useState } from 'react';

import ContactForm from '../shared/ContactForm';

const ContratarMotosContactForm = () => {
  const [hasPolicy, setHasPolicy] = useState(false);

  const handleReasonChange = (event) => {
    if (event.target.value === 'Poliza Por Vencer') {
      setHasPolicy(true);
    } else {
      setHasPolicy(false);
    }
  };

  return (
    <section id="contratar-motos-contact-form">
      <div className="container-lg py-5">
        <ContactForm
          title="Contratar"
          subtitle="Completa los datos y contrata tu seguro SOA de motos"
          theme="light"
          template="motos"
          fieldsList={['marca', 'modelo', 'year', 'estado', 'location', 'fuel', 'category', 'antirrobo', 'motivo', 'company']}
        >
          <div className="row mx-0">
            <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
              <div className="mb-3 input-group">
                <input type="text" name="marca" id="marca" className="form-control bg-light" placeholder="Marca" required />
              </div>
            </div>

            <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
              <div className="mb-3 input-group">
                <input type="text" name="modelo" id="modelo" className="form-control bg-light" placeholder="Modelo" />
              </div>
            </div>
          </div>

          <div className="row mx-0">
            <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
              <div className="mb-3 input-group">
                <input type="number" name="year" className="form-control bg-light" min="1900" max="2099" step="1" placeholder="Año" />
              </div>
            </div>

            <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
              <div className="mb-3 input-group">
                <select className="form-select text-dark bg-light" id="estado" name="estado" defaultValue="" required>
                  <option value="" disabled>Estado del vehículo</option>
                  <option value="0km">0km</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mx-0">
            <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
              <div className="mb-3 input-group">
                <select className="form-select text-dark bg-light" id="location" name="location" defaultValue="" required>
                  <option value="" disabled>Zona de circulación</option>
                  <option value="Montevideo y A. Metropol.">Montevideo y Área Metropolitana</option>
                  <option value="Artigas">Artigas</option>
                  <option value="Canelones">Canelones</option>
                  <option value="Cerro Largo">Cerro Largo</option>
                  <option value="Colonia">Colonia</option>
                  <option value="Durazno">Durazno</option>
                  <option value="Flores">Flores</option>
                  <option value="Florida">Florida</option>
                  <option value="Lavalleja">Lavalleja</option>
                  <option value="Maldonado">Maldonado</option>
                  <option value="Paysandu">Paysandu</option>
                  <option value="Rio Negro">Rio Negro</option>
                  <option value="Rivera">Rivera</option>
                  <option value="Rocha">Rocha</option>
                  <option value="Salto">Salto</option>
                  <option value="San Jose">San Jose</option>
                  <option value="Soriano">Soriano</option>
                  <option value="Tacuarembo">Tacuarembo</option>
                  <option value="Treinta y Tres">Treinta y Tres</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
              <div className="mb-3 input-group">
                <select className="form-select text-dark bg-light" id="category" name="category" defaultValue="" required>
                  <option value="" disabled>Categoría</option>
                  <option value="Particular">Particular</option>
                  <option value="Trabajo">Trabajo</option>
                  <option value="Particular y Trabajo">Particular y Trabajo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mx-0">
            <div className="col-12 col-md-6 ps-0 pe-0 pe-md-1">
              <div className="mb-3 input-group">
                <select className="form-select text-dark bg-light" id="motivo" name="motivo" defaultValue="" onChange={handleReasonChange} required>
                  <option value="" disabled>Motivo</option>
                  <option value="Poliza Nueva">Póliza Nueva</option>
                  <option value="Poliza Por Vencer">Póliza Por Vencer</option>
                  <option value="Cambio de Vehículo">Cambio De Vehículo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>

            {hasPolicy && (
              <div className="col-12 col-md-6 ps-0 ps-md-1 pe-0">
                <div className="mb-3 input-group">
                  <select className="form-select text-dark bg-light" id="company" name="company" defaultValue="" required>
                    <option value="" disabled>Compañía Actual</option>
                    <option value="Barbuss">Barbuss (Ex HDI)</option>
                    <option value="Berkley">Berkley</option>
                    <option value="BSE">BSE</option>
                    <option value="Mapfre">Mapfre</option>
                    <option value="Porto">Porto</option>
                    <option value="San Cristobal">San Cristobal</option>
                    <option value="Sancor">Sancor</option>
                    <option value="SBI">SBI</option>
                    <option value="Sura">Sura</option>
                    <option value="Surco">Surco</option>
                    <option value="Otra">Otra</option>
                    <option value="No Tengo">No Tengo</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </ContactForm>
      </div>
    </section>
  );
};

export default ContratarMotosContactForm;
