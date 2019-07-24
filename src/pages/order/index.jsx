import React from 'react';
import { Route } from 'react-router-dom';
import MenuOverview from '../../components/menu-overview';
import Menu from '../menu';

const Order = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={MenuOverview} />
    <Route path={`${match.path}/:menuId`} component={Menu} />
  </div>
);

export default Order;
