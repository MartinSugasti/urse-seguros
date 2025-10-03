import Cards from './Cards';
import Carousel from './Carousel';

const Seguros = () => (
  <section id="seguros">
    <div className="container-lg py-5">
      <div className="text-center mb-4">
        <h1 className="text-light mb-0">Seguros</h1>
        <p className="text-light mb-2 fst-italic text-light">Soluciones pensadas para tu tranquilidad</p>
      </div>

      <Cards />

      {/* <Carousel /> */}
    </div>
  </section>
);

export default Seguros;
