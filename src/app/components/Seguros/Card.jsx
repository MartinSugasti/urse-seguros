import PropTypes from 'prop-types';

import LinkWithLoaderAndScrolling from '../shared/LinkWithLoaderAndScrolling';

const Card = ({
  img,
  title,
  children,
  to,
  sectionId,
  buttonText
}) => (
  <div className="d-flex flex-column h-100 text-center text-light">
    <div className="image-section d-flex align-items-center justify-content-center">
      <img src={img} className="img-fluid" alt="" />
    </div>

    <div className="text-section d-flex flex-column">
      <h4 className="text-capitalize mt-3">{title}</h4>

      <div className="children-section-content align-content-center px-3">
        {children}
      </div>

      <LinkWithLoaderAndScrolling
        to={to}
        sectionId={sectionId}
        className="btn btn-outline-light rounded-pill w-50 mx-auto"
      >
        {buttonText}
      </LinkWithLoaderAndScrolling>
    </div>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Card;