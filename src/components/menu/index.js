import React, { useState } from 'react';
import './index.scss';
import MenuItem from '../menu-item';

const Menu = () => {
  const [sections] = useState([
    {
      id: 1,
      title: 'cookies',
      linkUrl: 'cookies',
      imageUrl: './images/cookies.jpg'
    },
    {
      id: 2,
      title: 'cakes',
      linkUrl: 'cakes',
      imageUrl: './images/cakes.jpg'
    },
    {
      id: 3,
      title: 'breads',
      linkUrl: 'breads',
      imageUrl: './images/breads.jpg'
    },
    {
      id: 4,
      title: 'desserts',
      size: 'large',
      linkUrl: 'desserts',
      imageUrl: './images/dessert.jpg'
    },
    {
      id: 5,
      title: 'drinks',
      size: 'large',
      linkUrl: 'drinks',
      imageUrl: './images/coffee.jpg'
    }
  ]);
  return (
    <div className="menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Menu;
