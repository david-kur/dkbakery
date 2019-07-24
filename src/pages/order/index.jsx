import React from 'react';
import { connect } from 'react-redux';
import MenuPreview from '../../components/menu-preview';
import { selectMenu } from '../../redux/order/reducer';

const Order = ({ menu }) => (
  <div>
    {menu.map(({ id, ...restProps }) => (
      <MenuPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  menu: selectMenu(state)
});

export default connect(mapStateToProps)(Order);
