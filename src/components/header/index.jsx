import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { firebaseAuth } from '../../firebase.config';

const Header = ({ currentUser }) => (
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
        <li>
          {currentUser ? (
            <div className="option" onClick={() => firebaseAuth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
