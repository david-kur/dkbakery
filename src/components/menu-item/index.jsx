import React from 'react';
import './index.scss';

const MenuItem = ({ title, size, imageUrl }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default MenuItem;