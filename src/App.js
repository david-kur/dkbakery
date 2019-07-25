import React, { useEffect } from 'react';
import './App.css';
import { firebaseAuth, createUserProfile } from './firebase.config';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header';
import Home from './pages/home';
import Order from './pages/order';
import Auth from './pages/auth';
import Checkout from './pages/checkout';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/reducer';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubFromAuth = null;
    unsubFromAuth = firebaseAuth.onAuthStateChanged(async user => {
      if (user) {
        const userReference = await createUserProfile(user);
        userReference.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(user);
    });
    return () => {
      unsubFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/order" component={Order} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
