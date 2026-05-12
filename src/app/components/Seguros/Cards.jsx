import Card from './Card';

import travelImage from '../../../assets/images/insurances/travel.svg';
import carImage from '../../../assets/images/insurances/car.svg';
import homeImage from '../../../assets/images/insurances/home.svg';
import familyLargeImage from '../../../assets/images/insurances/life.svg';
import motosImage from '../../../assets/images/insurances/motos.svg';
import movilidadImage from '../../../assets/images/insurances/movilidad.svg';
import agroImage from '../../../assets/images/insurances/agro.svg';
import businessImage from '../../../assets/images/insurances/business.svg';
// import bicicletaImage from '../../../assets/images/insurances/bicicleta.svg';
import othersImage from '../../../assets/images/insurances/others.svg';

const Cards = () => (
    <div className="row g-4 justify-content-center">
      <Card
        img={travelImage}
        title="Seguros de Viaje"
        to="/viaje"
        sectionId="contratar-viaje"
        buttonText="Contratar"
      >
        <p className="mb-0">
          Atrevete a descubrir cada rincón del planeta, respaldado por las mejores pólizas de seguro de viaje que te protegen en cada momento
        </p>
      </Card>

      <Card
        img={carImage}
        title="Seguro de Automóviles"
        to="/cotizacion?insurance_type=Seguros de Automóviles"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0 tooltipy">
        Cotizamos su vehículo con las compañías aseguradoras más importantes en nuestro país
          <i className="bi bi-info-circle ms-2" />
          <br />
          <div className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">
            <p className="mb-1">Seguro Obligatorio (SOA)</p>
            <p className="mb-1">Responsabilidad Civil</p>
            <p className="mb-1">Hurto, Incendio y Daño</p>
            <p className="mb-0">Pérdida Total</p>
          </div>
        </p>
      </Card>

      <Card
        img={homeImage}
        title="Seguros de Hogar"
        to="/cotizacion?insurance_type=Seguros de Hogar"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          A partir de US$100 anuales puedes asegurar tu casa y objetos contra incendios, inclemencias climáticas, daños eléctricos y más
        </p>
      </Card>

      <Card
        img={familyLargeImage}
        title="Seguros de Ahorro y Vida"
        to="/cotizacion?insurance_type=Seguros de Ahorro y Vida"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0 tooltipy">
          Conocé los planes de seguros de vida, ahorro y las diferentes coberturas complementarias
          <i className="bi bi-info-circle ms-2" />
          <br />
          <div className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">
            <p className="mb-1">Ahorro y Vida</p>
            <p className="mb-1">Renta</p>
            <p className="mb-1">Accidente</p>
            <p className="mb-0">Salud</p>
          </div>
        </p>

        {/* <p className="mt-1 mb-0 tooltipy">
          Ahorro y Vida
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Elegís el ahorro que querés cobrar al ﬁnal del período y en caso de fallecimiento le paga el capital a los beneﬁciarios</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Renta
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Te aseguras recibir una renta mensual a partir de la fecha que elegís al momento de contratarlo. También tenés la opción de retirar el capital generado al contado</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Accidente
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Esta solución busca protegerte en todo momento ante eventos inesperados, situaciones que te impiden seguir tu día a día con normalidad</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Salud
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Brinda la posibilidad de complementar la cobertura de salud en caso de tener el diagnóstico de enfermedades graves</span>
        </p> */}
      </Card>

      <Card
        img={motosImage}
        title="Seguros de Motos"
        to="/motos"
        sectionId="contratar-motos-contact-form"
        buttonText="Contratar"
      >
        <p className="mb-0">
          Contrata tu seguro obligatorio SOA de forma sencilla y ágil. También puedes consultarnos por seguros extras
        </p>
      </Card>

      <Card
        img={movilidadImage}
        title="Seguros de Movilidad Alternativa"
        to="/movilidad"
        sectionId="contratar-movilidad"
        buttonText="Contratar"
      >
        <p className="mb-1 tooltipy">
          Hurto
        </p>

        <p className="mb-1 tooltipy">
          Incendio
        </p>

        <p className="mb-1 tooltipy">
          Accidentes Personales
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">De 16 a 65 años</span>
        </p>

        <p className="mb-0 tooltipy">
          Responsabilidad Civil
        </p>
      </Card>

      {/* <Card
        img={bicicletaImage}
        title="Seguros de Bicicletas"
        to="/bicicletas"
        sectionId="intro-bicicletas"
        buttonText="Contratar"
      >
        <p className="mb-0">
          Seguros de Bicicletas
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Hurto
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Incendio
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Accidentes Personales
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">De 16 a 65 años</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Responsabilidad Civil
        </p>
      </Card> */}

      <Card
        img={agroImage}
        title="Seguros Agropecuarios"
        to="/cotizacion?insurance_type=Seguros Empresariales"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0 tooltipy">
          Diferentes tipos de seguros para el sector agropecuario
          <i className="bi bi-info-circle ms-2" />
          <br />
          <div className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">
            <p className="mb-1">Agrícola</p>
            <p className="mb-1">Vida Animal</p>
            <p className="mb-1">Forestación</p>
            <p className="mb-1">Responsabilidad Civil</p>
            <p className="mb-0">Maquinaria</p>
          </div>
        </p>

        {/* <p className="mt-1 mb-0 tooltipy">
          Agrícola
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Coberturas que garantizan indemnización por daños sufridos por factores climáticos</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Vida Animal
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Ganado vacuno, ovinos y suinos, equinos, animales de pedigree y toros de cabaña</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Forestación
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Coberturas de los riesgos de producción desde la etapa de vivero hasta el retiro de la madera</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Responsabilidad Civil
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Por explotación agropecuaria, por cruce y arreo de ganado y escape de animales</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Maquinaria
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Cubre los posibles daños que sufran tus maquinarias</span>
        </p> */}
      </Card>

      <Card
        img={businessImage}
        title="Seguros para Comercios"
        to="/cotizacion?insurance_type=Seguros Empresariales"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Protege tu actividad comercial, incluyendo flota de vehículos, transporte de mercaderías, riesgos operativos, etc
        </p>
      </Card>

      <Card
        img={othersImage}
        title="Otros"
        to="/cotizacion?insurance_type=Otros"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-1">
          Consultanos por otros tipos de seguros
        </p>

        <p className="mb-1 tooltipy">
          Garantía de Alquiler
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Este seguro es una garantía de arrendamiento para quien alquila una casa, apartamento o local comercial, protegiéndose a sí mismo y al propietario del inmueble del posible incumplimiento en el pago del alquiler</span>
        </p>

        <p className="mb-1 tooltipy">
          Vehículos Náuticos
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Seguro destinado a cubrir motos náuticas, jet sky, gomones, kayaks, etc.</span>
        </p>

        <p className="mb-1 tooltipy">
          Embarcaciones
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext px-3 py-2 mb-2 rounded-2 shadow w-100">Este seguro está destinado a cubrir todos aquellos barcos que sean utilizados sin fines de lucro (veleros, lanchas, botes, etc.)</span>
        </p>
      </Card>
    </div>
);

export default Cards;
