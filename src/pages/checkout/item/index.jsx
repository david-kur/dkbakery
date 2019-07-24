import React from 'react';
import './index.scss';

const CheckoutItem = ({ item: { imageUrl, name, qty, price } }) => (
  <div className="item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="qty">{qty}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
