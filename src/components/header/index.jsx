import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => (
  <div className="header">
    <h2>
      <Link className="brand-container" to="/">
        DK Bakery
      </Link>
    </h2>
    <div className="options">
      <ul>
        <li>
          <Link className="option" to="/order">
            ORDER
          </Link>
        </li>
        <li>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
