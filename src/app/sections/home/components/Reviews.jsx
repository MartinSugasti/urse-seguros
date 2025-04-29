import Slider from 'react-slick';

import reviewsImage from '../../../../assets/images/others/reviews.svg';

const Reviews = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="reviews" className="bg-light">
      <div className="container-lg py-5">
        <div className="text-center">
          <h1 className="text-dark mb-0">Reviews</h1>
          <p className="text-dark mb-2 fst-italic">Qué dicen nuestros clientes</p>
        </div>

        <div className="row mx-0 justify-content-around align-items-center">
          <div className="col-10 col-sm-8 col-md-6 text-center mt-3 mt-md-0 p-0 p-md-3">
            <img src={reviewsImage} className="img-fluid" alt="reviews" />
          </div>

          <div className="col-10 col-sm-8 col-md-6 bg-light rounded text-center slider-container pb-4 mt-4 mt-md-0">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {/* <div className="text-center text-dark">
                <q className="fst-italic">La amabilidad con la que fui atendida frente al reclamo por el choque de mi vehículo por parte de quien me atendió, Anabel. La misma me mantuvo al tanto del seguimiento del proceso con muchísima paciencia frente a mis múltiples preguntas por desconocimiento de este tipo de situación teniendo la misma un resultado positivo a mi favor</q>
                <p className="mt-4">
                  Facundo Torradeflo
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Un seguimiento diario de mi expediente, que culminó en el pago del siniestro en tiempo y forma por parte del BSE</q>
                <p className="mt-4">
                  Federico Llambia
                </p>
              </div> */}

              <div className="text-center text-dark">
                <q className="fst-italic">Lo mejor en corredores de seguros. José Luis y todos los colaboradores, personas excelentes.</q>
                <p className="mt-4">
                  Juan Jose Marizcurrena
                  <br />
                  <a
                    href="https://g.co/kgs/ez1KSRm"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Excelente atención de todos los funcionarios de Urse Seguros. Siempre están atentos y solucionando inconvenientes. Lo recomendaría siempre. Son excelentes!!</q>
                <p className="mt-4">
                  Andrea Ramon, Jardín Y Más Uy
                  <br />
                  <a
                    href="https://g.co/kgs/Dr27qM5"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">En Enero de 2022 nos contagiamos de Covid en un viaje a USA junto a mi señora y dos hijos. Luego de un confinamiento de 5 días y de esperar 10 días desde el test, pudimos volver a Uruguay y al llegar me hicieron la devolución de los gastos. Todo funcionó muy bien, en especial la atención de Jimena y Felipe que nos hicieron sentir respaldados y acompañados en esa difícil situación</q>
                <p className="mt-4">
                  Diego W.
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Un negocio que funciona en forma eficiente. El personal atento y dispuesto a solucionar. Me agrada ser su cliente.</q>
                <p className="mt-4">
                  Elizabeth Kelly
                  <br />
                  <a
                    href="https://g.co/kgs/LqA3nnz"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Excelente atención, muy ejecutivos a la hora de responder al cliente con prontitud y certeza. Por los seguros contratados!</q>
                <p className="mt-4">
                  Anabela Alvarez, Anabela Alvarez Intercoiffure
                  <br />
                  <a
                    href="https://g.co/kgs/Zx3oB2i"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Excelente corredor de seguros que brindan información, atendiendo las inquietudes del cliente. Dejando siempre tiempo para procesar y dialogar en familia y contactarnos nuevamente para una respuesta</q>
                <p className="mt-4">
                  Martin Sugasti
                  <br />
                  <a
                    href="https://g.co/kgs/qDa6jup"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>

              <div className="text-center text-dark">
                <q className="fst-italic">Siempre he sido muy bien atendido cuando he tenido que pasar por sus oficinas.</q>
                <p className="mt-4">
                  Daniel Arizmendi
                  <br />
                  <a
                    href="https://g.co/kgs/JgQEmZB"
                    target="_blank"
                    className="text-dark fst-italic small text-decoration-none"
                    rel="noreferrer"
                  >
                    (Ver original)
                  </a>
                </p>
              </div>
            </Slider>

            <div className="mt-5">
              <a href="https://search.google.com/local/writereview?placeid=ChIJE77fArECoZURL5cFhUl1bRA" className="soa-link btn btn-outline-secondary-dark rounded-pill" alt="dejanos-tu-opinion" target="_blank" rel="noreferrer">
                <p className="my-0">Déjanos tu opinión</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
