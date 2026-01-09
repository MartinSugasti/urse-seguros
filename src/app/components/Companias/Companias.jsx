import Slider from 'react-slick';

import bseImage from '../../../assets/images/companies_logos/bse.svg';
import mapfreImage from '../../../assets/images/companies_logos/mapfre.svg';
import portoImage from '../../../assets/images/companies_logos/porto.svg';
import sanCristobalImage from '../../../assets/images/companies_logos/san_cristobal.svg';
import sancorImage from '../../../assets/images/companies_logos/sancor.svg';
import suraImage from '../../../assets/images/companies_logos/sura.svg';
import sbiImage from '../../../assets/images/companies_logos/sbi.svg';
import surcoImage from '../../../assets/images/companies_logos/surco.png';
import berkleyImage from '../../../assets/images/companies_logos/berkley.png';
import bestDoctorsImage from '../../../assets/images/companies_logos/best_doctors.png';
import vumiImage from '../../../assets/images/companies_logos/vumi.png';
import urbanImage from '../../../assets/images/companies_logos/urban.png';
import barbussImage from '../../../assets/images/companies_logos/barbuss.png';

const Companias = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 950, settings: { slidesToShow: 4 } },
      { breakpoint: 750, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 450, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section id="companias" className="bg-light">
      <div className="container-lg py-5">
        <div className="slider-container">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings}>
            <div>
              <a href="https://www.bse.com.uy/portal-comercial/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={bseImage} className="m-auto" alt="bse-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.sancorseguros.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={sancorImage} className="m-auto p-1" alt="sancor-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.urbanglobaltravel.com" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={urbanImage} className="m-auto" alt="urban-logo" />
              </a>
            </div>
            <div>
              <a href="https://www2.hdi.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={barbussImage} className="m-auto p-2" alt="barbuss-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.portoseguro.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={portoImage} className="m-auto" alt="porto-logo" />
              </a>
            </div>
            <div>
              <a href="https://sura.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={suraImage} className="m-auto" alt="sura-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.mapfre.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={mapfreImage} className="m-auto" alt="mapfre-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.surco.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={surcoImage} className="m-auto" alt="surco-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.berkley.com.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={berkleyImage} className="m-auto" alt="berkley" />
              </a>
            </div>
            <div>
              <a href="https://www.vumigroup.com/es/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={vumiImage} className="m-auto" alt="vumi" />
              </a>
            </div>
            <div>
              <a href="https://bestdoctorsinsurance.com/es/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={bestDoctorsImage} className="m-auto" alt="best-doctors" />
              </a>
            </div>
            <div>
              <a href="https://www.sbi.uy/" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={sbiImage} className="m-auto" alt="sbi-logo" />
              </a>
            </div>
            <div>
              <a href="https://www.sancristobalseguros.com.uy" alt="link-to-company-page" target="_blank" rel="noreferrer">
                <img src={sanCristobalImage} className="m-auto" alt="san-cristobal-logo" />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companias;
