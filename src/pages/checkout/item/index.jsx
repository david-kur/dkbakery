import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, subtractItem } from '../../../redux/cart/actions';

const CheckoutItem = ({ item, removeItem, addItem, subtractItem }) => {
  const { imageUrl, name, qty, price, id } = item;
  return (
    <span className="item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="qty">
        <div className="arrow" onClick={() => subtractItem(id)}>
          &#10094;
        </div>
        <span className="value">{qty}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </span>
  );
};

export default connect(
  null,
  { removeItem, addItem, subtractItem }
)(CheckoutItem);
