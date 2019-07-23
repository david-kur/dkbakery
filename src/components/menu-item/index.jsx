import React from 'react';
import InputButton from '../input-button';

import './index.scss';

const MenuItem = ({ id, name, price, imageUrl }) => (
  <div className="menu-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="menu-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <InputButton isInverted>Add to cart</InputButton>
  </div>
);

export default MenuItem;
