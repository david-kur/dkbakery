import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner';
import Menu from '../menu';
import MenuOverview from '../../components/menu-overview';
import { fetchMenu } from '../../redux/order/actions';

const Order = ({ match, loading, fetchMenu }) => {
  const MenuWithSpinner = Spinner(Menu);
  const MenuOverviewWithSpinner = Spinner(MenuOverview);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return (
    <>
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
    </>
  );
};

const mapStateToProps = ({ order: { loading } }) => ({
  loading
});

export default connect(
  mapStateToProps,
  { fetchMenu }
)(Order);
