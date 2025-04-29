import familyImage from '../../../../assets/images/others/family.svg';

const Intro = () => (
  <section id="main-intro" className="bg-light">
    <div className="container-lg py-5">
      <div className="row mx-0 g-4 justify-content-around align-items-center">
        <div className="col-md-6 text-center">
          <h1 className="text-dark mb-0">Especialistas en Seguros</h1>
          <p className="text-muted mb-2 fst-italic">Lideres en servicios desde 1987</p>
        </div>

        <div className="col-6 col-md-4 text-center">
          <img src={familyImage} className="img-fluid" alt="family" />
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
