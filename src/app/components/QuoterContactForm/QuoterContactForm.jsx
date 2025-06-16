import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ContactForm from '../shared/ContactForm';
import CarInsuranceFields from './CarInsuranceFields';
import HomeInsuranceFields from './HomeInsuranceFields';
import BusinessInsuranceFields from './BusinessInsuranceFields';
import OthersInsuranceFields from './OthersInsuranceFields';
import LifeAndSavingsInsuranceFields from './LifeAndSavingsInsuranceFields';

const fieldsComponentMapping = {
  'Seguros de Automóviles': CarInsuranceFields,
  'Seguros Empresariales': BusinessInsuranceFields,
  'Seguros de Ahorro y Vida': LifeAndSavingsInsuranceFields,
  'Seguros de Hogar': HomeInsuranceFields,
  Otros: OthersInsuranceFields
};

const fieldsListMapping = {
  'Seguros de Automóviles': ['marca', 'modelo', 'year', 'estado', 'location', 'fuel', 'category', 'antirrobo', 'motivo', 'company'],
  'Seguros Empresariales': ['location', 'actividad'],
  'Seguros de Ahorro y Vida': ['profesion', 'hobby', 'monto', 'birthday'],
  'Seguros de Hogar': ['location', 'tipo', 'destino'],
  Otros: []
};

const templateMapping = {
  'Seguros de Automóviles': 'automoviles',
  'Seguros Empresariales': 'empresariales',
  'Seguros de Ahorro y Vida': 'otros',
  'Seguros de Hogar': 'otros',
  Otros: 'otros'
};

const QuoterContactForm = () => {
  const { search } = useLocation();
  const [insuranceType, setInsuranceType] = useState(new URLSearchParams(search).get('insurance_type') || 'Seguros de Automóviles');

  const FieldsComponent = fieldsComponentMapping[insuranceType];
  const template = templateMapping[insuranceType];

  const handleInsuranceTypeSelection = (event) => {
    setInsuranceType(event.target.value);
  };

  return (
    <section id="quoter-contact-form">
      <div className="container-lg py-5">
        <ContactForm
          title="Cotizar"
          subtitle="Completa los datos y te responderemos a la brevedad"
          theme="light"
          template={template}
          fieldsList={fieldsListMapping[insuranceType]}
        >
          <>
            <div className="mb-3 input-group">
              <select className="form-select text-dark bg-white" id="subject" name="subject" defaultValue={insuranceType} onChange={handleInsuranceTypeSelection} required>
                <option value="Seguros de Automóviles">Seguros de Automóviles</option>
                <option value="Seguros Empresariales">Seguros Empresariales</option>
                <option value="Seguros de Ahorro y Vida">Seguros de Ahorro y Vida</option>
                <option value="Seguros de Hogar">Seguros de Hogar</option>
                <option value="Otros">Otros</option>
              </select>
            </div>

            <FieldsComponent />
          </>
        </ContactForm>
      </div>
    </section>
  );
};

export default QuoterContactForm;
