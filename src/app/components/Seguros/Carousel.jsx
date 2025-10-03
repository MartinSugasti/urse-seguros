import CarouselCard from './CarouselCard';

import carImage from '../../../assets/images/insurances/car.svg';
import travelImage from '../../../assets/images/insurances/travel.svg';
import motosImage from '../../../assets/images/insurances/motos.svg';
import familyLargeImage from '../../../assets/images/insurances/life.svg';
import homeImage from '../../../assets/images/insurances/home.svg';
import agroImage from '../../../assets/images/insurances/agro.svg';
import businessImage from '../../../assets/images/insurances/business.svg';
import othersImage from '../../../assets/images/insurances/others.svg';

const Carousel = () => (
  <div id="carouselExampleControls" className="carousel slide my-n3" data-bs-ride="carousel" data-bs-interval="4000">
    <div className="carousel-inner m-auto overflow-visible">
      <CarouselCard active image={carImage} insuranceType="Seguros de Automóviles">
        <>
          <h4 className="card-title text-center text-sm-start text-light">Seguro de Automóviles</h4>
          <p className="card-text">Cotizamos su vehículo teniendo en cuenta el mejor costo-beneficio con las compañías aseguradoras más importantes instaladas en nuestro país</p>
          {/* <p className="card-text">Aseguramos cualquier tipo de vehículo de acuerdo a las coberturas correspondientes:</p>
          <ul className="list ps-0">
            <li>
              <i className="bi bi-check-lg me-1" />
              Seguro Obligatorio (SOA)
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Responsabilidad Civil
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Incendio
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Hurto
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Daño Propio
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Daños Mayores
            </li>
            <li>
              <i className="bi bi-check-lg me-1" />
              Pérdida Total
            </li>
          </ul> */}
        </>
      </CarouselCard>

      <CarouselCard image={travelImage} insuranceType="Seguros de Viaje">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros de Viaje</h4>
          <p className="card-text">
            Cubre la asistencia médica en ocasión de un viaje, ya sea de placer, turismo o negocios
          </p>
        </>
      </CarouselCard>

      <CarouselCard image={motosImage} insuranceType="Seguros de Motos">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros de Motos</h4>
          <p className="card-text">
            Contrata tu seguro obligatorio SOA de forma sencilla y ágil. También puedes consultarnos por seguros extras
          </p>
        </>
      </CarouselCard>

      <CarouselCard image={familyLargeImage} insuranceType="Seguros de Ahorro y Vida">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros de Ahorro y Vida</h4>
          <p className="card-text">Conocé los planes de seguros de vida, ahorro y las diferentes coberturas complementarias</p>

          <h6 className="mb-2 tooltipy">
            Ahorro y Vida
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Elegís el ahorro que querés cobrar al ﬁnal del período y en caso de fallecimiento le paga el capital a los beneﬁciarios</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Renta
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Te aseguras recibir una renta mensual a partir de la fecha que elegís al momento de contratarlo. También tenés la opción de retirar el capital generado al contado</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Accidente
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Esta solución busca protegerte en todo momento ante eventos inesperados, situaciones que te impiden seguir tu día a día con normalidad</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Salud
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Brinda la posibilidad de complementar la cobertura de salud en caso de tener el diagnóstico de enfermedades graves</span>
          </h6>
        </>
      </CarouselCard>

      <CarouselCard image={homeImage} insuranceType="Seguros de Hogar">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros de Hogar</h4>
          <p className="card-text">
            El clima, la inseguridad y los accidentes son peligros latentes. A partir de US$100 anuales puedes asegurar tu casa y objetos contra incendios, inclemencias climáticas, daños eléctricos, cristales rotoes, etc.
          </p>
        </>
      </CarouselCard>

      <CarouselCard image={agroImage} insuranceType="Seguros Empresariales">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros Agropecuarios</h4>
          <p className="card-text">Conocé los diferentes tipos de seguros para el sector agropecuario</p>

          <h6 className="mb-2 tooltipy">
            Agrícola
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Coberturas que garantizan indemnización por daños sufridos por factores climáticos</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Vida Animal
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Ganado vacuno, ovinos y suinos, equinos, animales de pedigree y toros de cabaña</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Forestación
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Coberturas de los riesgos de producción desde la etapa de vivero hasta el retiro de la madera</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Responsabilidad Civil
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Por explotación agropecuaria, por cruce y arreo de ganado y escape de animales</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Maquinaria Agrícola y Forestal
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Cubre los posibles daños que sufran tus maquinarias</span>
          </h6>
        </>
      </CarouselCard>

      <CarouselCard image={businessImage} insuranceType="Seguros Empresariales">
        <>
          <h4 className="card-title text-center text-sm-start">Seguros para Comercios</h4>
          <p className="card-text">Realiza tu actividad comercial con tranquilidad con los diferentes tipos de seguros para comercios, incluyendo flota de vehículos, transporte de mercaderías, riesgos operativos, créditos a la exportación, etc.</p>
        </>
      </CarouselCard>

      <CarouselCard image={othersImage} insuranceType="Otros">
        <>
          <h4 className="card-title text-center text-sm-start">Otros</h4>
          <p className="card-text">Consultanos por otros tipos de seguros, como por ejemplo:</p>

          <h6 className="mb-2 tooltipy">
            Garantía de Alquiler
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Este seguro es una garantía de arrendamiento para quien alquila una casa, apartamento o local comercial, protegiéndose a sí mismo y al propietario del inmueble del posible incumplimiento en el pago del alquiler</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Vehículos Náuticos
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Seguro destinado a cubrir motos náuticas, jet sky, gomones, kayaks, etc.</span>
          </h6>

          <h6 className="mb-2 tooltipy">
            Embarcaciones
            <i className="bi bi-info-circle ms-2" />
            <br />
            <span className="tooltiptext mt-2">Este seguro está destinado a cubrir todos aquellos barcos que sean utilizados sin fines de lucro (veleros, lanchas, botes, etc.)</span>
          </h6>
        </>
      </CarouselCard>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;