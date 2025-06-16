import travelImage from '../../../assets/images/others/travel.svg';

const IntroViaje = () => (
  <section id="intro-viaje" className="bg-light">
    <div className="container-lg py-5">
      <div className="row mx-0 g-4 justify-content-around align-items-center">
        <div className="col-md-6 order-md-2 text-center mt-4 mt-md-0">
          <h1 className="text-dark mb-0">Seguro de Viaje</h1>
          <p className="text-muted mb-2 fst-italic">Contrata tu seguro de viaje de forma sencilla y ágil</p>
        </div>
        <div className="col-10 col-sm-8 col-md-5 order-md-1 text-center">
          <img src={travelImage} className="img-fluid" alt="calculator" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroViaje;
