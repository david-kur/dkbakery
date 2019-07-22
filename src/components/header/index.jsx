import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { firebaseAuth } from '../../firebase.config';
import { connect } from 'react-redux';
import CartIcon from '../cart/icon';
import CartDropdown from '../cart/dropdown';

const Header = ({ currentUser, cartDropdownHidden }) => (
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
        <li>
          <CartIcon />
        </li>
      </ul>
    </div>
    {cartDropdownHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartDropdownHidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
