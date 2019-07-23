import React from 'react';
import './index.scss';
import { ReactComponent as ShoppingCartIcon } from '../../../cart.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../../redux/cart/actions';

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingCartIcon className="shopping-cart-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.items.reduce((total, item) => total + item.qty, 0)
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(CartIcon);
