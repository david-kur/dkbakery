import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import MenuPreview from '../menu-preview';
import { selectMenuForPreview } from '../../redux/order/reducer';

const MenuOverview = ({ menu }) => (
  <div className="menu-overview">
    {menu.map(({ id, ...restProps }) => (
      <MenuPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  menu: selectMenuForPreview(state)
});

export default connect(mapStateToProps)(MenuOverview);
