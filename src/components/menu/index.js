import React, { useState } from 'react';
import './index.scss';
import MenuItem from '../menu-item';

const Menu = () => {
  const [sections] = useState([
    {
      id: 1,
      title: 'cookies',
      imageUrl: './images/cookies.jpg'
    },
    {
      id: 2,
      title: 'cakes',
      imageUrl: './images/cakes.jpg'
    },
    {
      id: 3,
      title: 'breads',
      imageUrl: './images/breads.jpg'
    },
    {
      id: 4,
      title: 'dessert',
      size: 'large',
      imageUrl: './images/dessert.jpg'
    },
    {
      id: 5,
      title: 'coffee',
      size: 'large',
      imageUrl: './images/coffee.jpg'
    }
  ]);
  return (
    <div className="menu">
      {sections.map(({ id, title, size, imageUrl }) => (
        <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Menu;
