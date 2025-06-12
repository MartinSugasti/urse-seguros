import teamImage from '../../../assets/images/others/team.svg';

const IntroAbout = () => (
  <section id="intro-about" className="bg-light">
    <div className="container-lg py-5">
      <div className="row mx-0 g-4 justify-content-around align-items-center">
        <div className="col-md-4 order-md-2 text-center mt-4 mt-md-0">
          <h1 className="text-dark mb-0">Sobre Nosotros</h1>
          <p className="text-muted mb-2 fst-italic">Conoce nuestra historia y nuestro equipo</p>
        </div>
        <div className="col-10 col-sm-8 col-md-5 order-md-1 text-center">
          <img src={teamImage} className="img-fluid" alt="team" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroAbout;
