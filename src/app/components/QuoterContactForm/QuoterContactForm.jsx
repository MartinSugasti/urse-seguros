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
  'Seguros de Ahorro y Vida': LifeAndSavingsInsuranceFields,
  'Seguros de Hogar': HomeInsuranceFields,
  'Seguros Empresariales': BusinessInsuranceFields,
  Otros: OthersInsuranceFields
};

const fieldsListMapping = {
  'Seguros de Automóviles': ['marca', 'modelo', 'year', 'estado', 'location', 'fuel', 'category', 'antirrobo', 'motivo', 'company'],
  'Seguros de Ahorro y Vida': ['profesion', 'hobby', 'monto', 'birthday'],
  'Seguros de Hogar': ['location', 'tipo', 'destino'],
  'Seguros Empresariales': ['location', 'actividad'],
  Otros: []
};

const templateMapping = {
  'Seguros de Automóviles': 'automoviles',
  'Seguros de Ahorro y Vida': 'vida',
  'Seguros de Hogar': 'hogar',
  'Seguros Empresariales': 'empresariales',
  Otros: 'contact'
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
          insuranceType={insuranceType}
          handleInsuranceTypeSelection={handleInsuranceTypeSelection}
          template={template}
          fieldsList={fieldsListMapping[insuranceType]}
          showDropdown={true}
        >
          {insuranceType && <FieldsComponent /> }
        </ContactForm>
      </div>
    </section>
  );
};

export default QuoterContactForm;
