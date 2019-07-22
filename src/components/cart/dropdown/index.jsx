import React from 'react';
import './index.scss';
import InputButton from '../../input-button';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <InputButton>Check Out</InputButton>
  </div>
);

export default CartDropdown;
