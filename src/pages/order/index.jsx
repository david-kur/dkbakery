import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  firebaseFirestore,
  convertMenuSnapshotToMenuData
} from '../../firebase.config';
import Spinner from '../../components/spinner';
import Menu from '../menu';
import MenuOverview from '../../components/menu-overview';
import { updateMenu } from '../../redux/order/actions';

const Order = ({ match, updateMenu }) => {
  const [loading, setLoading] = useState(true);
  const MenuWithSpinner = Spinner(Menu);
  const MenuOverviewWithSpinner = Spinner(MenuOverview);

  useEffect(() => {
    let unsubFromSnapshot = null;
    const collectionRef = firebaseFirestore.collection('menu');
    unsubFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const menuData = convertMenuSnapshotToMenuData(snapshot);
      updateMenu(menuData);
      setLoading(false);
    });
    return () => {
      unsubFromSnapshot();
    };
  }, [updateMenu]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <MenuOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:menuId`}
        render={props => <MenuWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  );
};

export default connect(
  null,
  { updateMenu }
)(Order);
