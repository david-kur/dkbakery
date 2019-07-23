import React from 'react';
import './index.scss';
import MenuItem from '../menu-item';

const MenuPreview = ({ title, items }) => {
  return (
    <div className="menu-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default MenuPreview;
