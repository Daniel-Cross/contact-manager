import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            Contact Manager
          </a>
          <div>
            <ul className="navbar nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Contact Manager'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
