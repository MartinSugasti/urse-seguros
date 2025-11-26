// I created this component because of issues
// with Link component from react routes and Navbar from bootstrap
// It shows loader when necessary
// It scrolls to top when necessary
// It scrolls to element with sectionId when necessary
// It closes Navbar when necessary

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Collapse } from 'bootstrap';

// className,
// sectionId,
// path,
// children

const LinkWithLoaderAndScrolling = ({
  to,
  className,
  sectionId,
  children
}) => {
  const showLoader = (id) => {
    const section = document.getElementById(id);

    // If section is not found, it means we are navigating to a new path,
    // so loader should show up
    // Be careful to not repeat contact sections in different pages, because this may end up in not showing the loader
    if (!section) {
      document.querySelector('#loader').classList.remove('hidden');
      document.querySelector('.smoothly-show-page').classList.remove('non-hidden');

      setTimeout(() => {
        document.querySelector('#loader').classList.add('hidden');
        document.querySelector('.smoothly-show-page').classList.add('non-hidden');
      }, 1200);
    }

    // If id contains the word 'intro', it means we are navigating to a top section,
    // so page should scroll to top
    if (id.includes('intro')) {
      console.log('Scrolling up');
      window.scrollTo(0, 0);
    }

    // If id contains the word 'contact', it means we are navigating to a contact form,
    // or id contains the word 'contratar', it means we are navigating to a contract section,
    // so page should scroll to that section
    // A 1 sec timeout is set in case the contact form is not in current page
    if (id.includes('contact') || id.includes('contratar')) {
      if (section) {
        document.querySelector(`#${id}`).scrollIntoView(true);
      } else {
        setTimeout(() => {
          document.querySelector(`#${id}`).scrollIntoView(true);
        }, 1200);
      }
    }

    // Close navbar in case it's open
    const menuToggle = document.querySelector('#main-nav.show');
    if (menuToggle) {
      const bsCollapse = new Collapse(menuToggle);
      bsCollapse.toggle();
    }
  };

  return (
    <Link to={to} className={className} onClick={() => showLoader(sectionId)}>
      {children}
    </Link>
  );
};

LinkWithLoaderAndScrolling.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

LinkWithLoaderAndScrolling.defaultProps = {
  className: null
};

export default LinkWithLoaderAndScrolling;
