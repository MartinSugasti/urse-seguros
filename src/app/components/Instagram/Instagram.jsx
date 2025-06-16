import feed1 from '../../../assets/images/feeds/feed1.jpeg';
import feed2 from '../../../assets/images/feeds/feed2.jpeg';
import feed3 from '../../../assets/images/feeds/feed3.jpeg';
import feed4 from '../../../assets/images/feeds/feed4.jpeg';

const Instagram = () => (
  <section id="instagram" className="bg-light">
    <div className="container-lg py-5">
      <div className="text-center">
        <h1 className="text-dark mb-0">Síguenos</h1>
        <p className="text-dark mb-2 fst-italic">Enterate de las últimas novedades por nuestras redes sociales</p>
      </div>

      <div className="row mt-4">
        <div className="col-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed1} alt="Instagram post 1" />
          </a>
        </div>

        <div className="col-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed2} alt="Instagram post 2" />
          </a>
        </div>

        <div className="col-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed3} alt="Instagram post 3" />
          </a>
        </div>

        <div className="col-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed4} alt="Instagram post 4" />
          </a>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer" className="btn btn-primary-dark rounded-pill px-5">Más</a>
      </div>
    </div>
  </section>
);

export default Instagram;
