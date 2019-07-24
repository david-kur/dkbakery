import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { removeItem } from '../../../redux/cart/actions';

const CheckoutItem = ({
  item: { imageUrl, name, qty, price, id },
  removeItem
}) => (
  <div className="item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="qty">{qty}</span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={() => removeItem(id)}>
      &#10005;
    </div>
  </div>
);

export default connect(
  null,
  { removeItem }
)(CheckoutItem);
