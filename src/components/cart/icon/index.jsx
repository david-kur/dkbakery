import React from 'react';
import './index.scss';
import { ReactComponent as ShoppingCartIcon } from '../../../cart.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../../redux/cart/actions';
import { selectCountItemsInCart } from '../../../redux/cart/reducer';

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingCartIcon className="shopping-cart-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCountItemsInCart(state)
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(CartIcon);
