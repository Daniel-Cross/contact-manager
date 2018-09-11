import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Manager
          </Link>
          <div>
            <ul className="navbar nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" />
                  Add Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" />
                  About
                </Link>
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
