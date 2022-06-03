import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GitHubLogo from './github';
import LinkedIn from './linkedin';

function Header({ location: { pathname } }) {
  const [mobNavDisplay, setMobNavDisplay] = useState(false);
  return (
    <header>
      <nav>
        <div className="flex items-center text-white absolute
        top-2 w-full h-7 pl-3 pt-4 sm:hidden"
        >
          <LinkedIn
            className="mobile-social"
          />
          <GitHubLogo
            className="mobile-social"
          />
        </div>
        <button
          data-testid="mobile-nav-btn"
          className="absolute right-3 top-3 p-0 z-10 sm:hidden"
          type="button"
          onClick={() => setMobNavDisplay(!mobNavDisplay)}
        >
          <hr className="nav-line" />
          <hr className="nav-line" />
          <hr className="nav-line" />
        </button>
        <div
          data-testid="nav-container"
          className={`${mobNavDisplay ? 'flex' : 'hidden'} absolute top-0 w-full flex-col 
          drop-shadow-sm sm:flex sm:flex-row sm:justify-between sm:pr-4 sm:right-0
          sm:w-2/3 lg:w-1/2 sm:drop-shadow-none bg-neutral-900`}
        >
          <Link
            to="/about"
            className={`nav-option ${pathname === '/about' && 'selected'}`}
            data-testid="link-/about"
          >
            ABOUT ME
          </Link>
          <Link
            to="/"
            className={`nav-option ${pathname === '/' && 'selected'}`}
            data-testid="link-/"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/contact"
            data-testid="link-/contact"
            className={`nav-option ${pathname === '/contact' && 'selected'}`}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
