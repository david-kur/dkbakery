import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, subtractItem } from '../../../redux/cart/actions';

const CartItem = ({ item, removeItem, addItem, subtractItem }) => {
  const { id, name, price, imageUrl, qty } = item;
  return (
    <div className="cart-item">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <span className="remove" onClick={() => removeItem(id)}>
          remove
        </span>
      </div>
      <div className="buttons">
        <span className="arrow" onClick={() => addItem(item)}>
          &#9650;
        </span>
        <span className="amount">{qty}</span>
        <span className="arrow" onClick={() => subtractItem(id)}>
          &#9660;
        </span>
      </div>
    </div>
  );
};

export default connect(
  null,
  { removeItem, addItem, subtractItem }
)(CartItem);
