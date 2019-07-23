import React from 'react';
import './index.scss';

const CartItem = ({ item: { name, price, imageUrl, qty } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {qty} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
