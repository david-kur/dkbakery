import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import InputButton from '../input-button';
import { addItem } from '../../redux/cart/actions';

const MenuItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="menu-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="menu-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <InputButton isInverted onClick={() => addItem(item)}>
        Add to cart
      </InputButton>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(MenuItem);
