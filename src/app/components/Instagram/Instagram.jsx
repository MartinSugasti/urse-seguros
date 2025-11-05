import feed1 from '../../../assets/images/feeds/feed_1.jpg';
import feed2 from '../../../assets/images/feeds/feed_2.jpg';
import feed3 from '../../../assets/images/feeds/feed_3.jpg';
import feed4 from '../../../assets/images/feeds/feed_4.jpg';

const Instagram = () => (
  <section id="instagram" className="bg-light">
    <div className="container-lg py-5">
      <div className="text-center">
        <h1 className="text-dark mb-0">Síguenos</h1>
        <p className="text-dark mb-2 fst-italic">Enterate de las últimas novedades por nuestras redes sociales</p>
      </div>

      <div className="row gx-3 mt-4">
        <div className="col-6 col-sm-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed1} className="rounded-1 shadow-lg" alt="Instagram post 1" />
          </a>
        </div>

        <div className="col-6 col-sm-3">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed2} className="rounded-1 shadow-lg" alt="Instagram post 2" />
          </a>
        </div>

        <div className="col-6 col-sm-3 mt-3 mt-sm-0">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed3} className="rounded-1 shadow-lg" alt="Instagram post 3" />
          </a>
        </div>

        <div className="col-6 col-sm-3 mt-3 mt-sm-0">
          <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer">
            <img src={feed4} className="rounded-1 shadow-lg" alt="Instagram post 4" />
          </a>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="https://www.instagram.com/urse_seguros/" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill text-light px-5">Más</a>
      </div>
    </div>
  </section>
);

export default Instagram;
