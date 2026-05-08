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
  <div className="col-11 col-sm-6 col-md-4 col-lg-3 d-flex">
    <div className="seguros-card text-center text-dark bg-light rounded h-100 w-100 d-flex flex-column border border-0 border-primary-dark">
      <div className="seguros-card__media my-3 my-sm-1">
        <img src={img} className="seguros-card__img" alt="" />
      </div>

      <div className="seguros-card__body">
        <h5 className="seguros-card__title text-capitalize text-primary-dark">{title}</h5>

        <div className="seguros-card__text align-content-center text-muted small">
          {children}
        </div>

        <LinkWithLoaderAndScrolling
          to={to}
          sectionId={sectionId}
          className="seguros-card__cta btn btn-outline-primary-dark rounded-pill w-50 mx-auto"
        >
          {buttonText}
        </LinkWithLoaderAndScrolling>
      </div>
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