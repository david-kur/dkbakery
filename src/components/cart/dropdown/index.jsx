import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import InputButton from '../../input-button';
import CartItem from '../item';
import { selectItemsInCart } from '../../../redux/cart/reducer';

const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <InputButton>Check Out</InputButton>
  </div>
);

const mapStateToProps = state => ({ items: selectItemsInCart(state) });

export default connect(mapStateToProps)(CartDropdown);
