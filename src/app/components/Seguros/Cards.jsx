import Slider from 'react-slick';

import Card from './Card';

import carImage from '../../../assets/images/insurances/car.svg';
import travelImage from '../../../assets/images/insurances/travel.svg';
import motosImage from '../../../assets/images/insurances/motos.svg';
import familyLargeImage from '../../../assets/images/insurances/life.svg';
import homeImage from '../../../assets/images/insurances/home.svg';
import agroImage from '../../../assets/images/insurances/agro.svg';
import businessImage from '../../../assets/images/insurances/business.svg';
import othersImage from '../../../assets/images/insurances/others.svg';

const Cards = () => {
  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      <Card
        img={carImage}
        title="Seguro de Automóviles"
        to="/cotizacion?insurance_type=Seguros de Automóviles"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Cotizamos su vehículo con las compañías aseguradoras más importantes en nuestro país.
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Seguro Obligatorio (SOA)
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Responsabilidad Civil
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Hurto, Incendio y Daño
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Pérdida Total
        </p>
      </Card>

      <Card
        img={travelImage}
        title="Seguros de Viaje"
        to="/viaje"
        sectionId="contratar-viaje-contact-form"
        buttonText="Contratar"
      >
        <p className="mb-0">
          Cubre la asistencia médica en ocasión de un viaje, ya sea de placer, turismo o negocios. Atrevete a descubrir cada rincón del planeta, respaldado por las mejores pólizas de seguro de viaje, que te protegen en cada momento.
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
          El clima, la inseguridad y los accidentes son peligros latentes. A partir de US$100 anuales puedes asegurar tu casa y objetos contra incendios, inclemencias climáticas, daños eléctricos y más.
        </p>
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
        img={familyLargeImage}
        title="Seguros de Ahorro y Vida"
        to="/cotizacion?insurance_type=Seguros de Ahorro y Vida"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Conocé los planes de seguros de vida, ahorro y las diferentes coberturas complementarias
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Ahorro y Vida
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Elegís el ahorro que querés cobrar al ﬁnal del período y en caso de fallecimiento le paga el capital a los beneﬁciarios</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Renta
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Te aseguras recibir una renta mensual a partir de la fecha que elegís al momento de contratarlo. También tenés la opción de retirar el capital generado al contado</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Accidente
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Esta solución busca protegerte en todo momento ante eventos inesperados, situaciones que te impiden seguir tu día a día con normalidad</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Salud
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Brinda la posibilidad de complementar la cobertura de salud en caso de tener el diagnóstico de enfermedades graves</span>
        </p>
      </Card>

      <Card
        img={agroImage}
        title="Seguros Agropecuarios"
        to="/cotizacion?insurance_type=Seguros Empresariales"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Diferentes tipos de seguros para el sector agropecuario
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Agrícola
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Coberturas que garantizan indemnización por daños sufridos por factores climáticos</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Vida Animal
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Ganado vacuno, ovinos y suinos, equinos, animales de pedigree y toros de cabaña</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Forestación
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Coberturas de los riesgos de producción desde la etapa de vivero hasta el retiro de la madera</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Responsabilidad Civil
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Por explotación agropecuaria, por cruce y arreo de ganado y escape de animales</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Maquinaria
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Cubre los posibles daños que sufran tus maquinarias</span>
        </p>
      </Card>

      <Card
        img={businessImage}
        title="Seguros para Comercios"
        to="/cotizacion?insurance_type=Seguros Empresariales"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Realiza tu actividad comercial con tranquilidad con los diferentes tipos de seguros para comercios, incluyendo flota de vehículos, transporte de mercaderías, riesgos operativos, créditos a la exportación, etc.
        </p>
      </Card>

      <Card
        img={othersImage}
        title="Otros"
        to="/cotizacion?insurance_type=Otros"
        sectionId="quoter-contact-form"
        buttonText="Cotizar"
      >
        <p className="mb-0">
          Consultanos por otros tipos de seguros, como por ejemplo
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Garantía de Alquiler
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Este seguro es una garantía de arrendamiento para quien alquila una casa, apartamento o local comercial, protegiéndose a sí mismo y al propietario del inmueble del posible incumplimiento en el pago del alquiler</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Vehículos Náuticos
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Seguro destinado a cubrir motos náuticas, jet sky, gomones, kayaks, etc.</span>
        </p>

        <p className="mt-1 mb-0 tooltipy">
          Embarcaciones
          <i className="bi bi-info-circle ms-2" />
          <br />
          <span className="tooltiptext mt-2">Este seguro está destinado a cubrir todos aquellos barcos que sean utilizados sin fines de lucro (veleros, lanchas, botes, etc.)</span>
        </p>
      </Card>
    </Slider>
  );
};

export default Cards;
