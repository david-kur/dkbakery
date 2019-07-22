import React from 'react';
import './index.scss';
import { ReactComponent as ShoppingCartIcon } from '../../../cart.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../../redux/cart/actions';

const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingCartIcon className="shopping-cart-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
