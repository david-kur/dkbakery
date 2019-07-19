import React, { useState } from 'react';
import MENU_DATA from './menu.data.js';
import MenuPreview from '../../components/menu-preview';

const Order = () => {
  const [menu] = useState(MENU_DATA);
  return (
    <div>
      {menu.map(({ id, ...restProps }) => (
        <MenuPreview key={id} {...restProps} />
      ))}
    </div>
  );
};

export default Order;
