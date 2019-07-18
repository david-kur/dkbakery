import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => (
  <div className="header">
    <Link to="/">DK Store</Link>
    <div className="options">
      <Link className="option" to="/order">
        ORDER
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
