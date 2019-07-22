import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Order from './pages/order';
import Auth from './pages/auth';
import { firebaseAuth, createUserProfile } from './firebase.config';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/actions';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubFromAuth = null;
    unsubFromAuth = firebaseAuth.onAuthStateChanged(async user => {
      if (user) {
        const userReference = await createUserProfile(user);
        userReference.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(user);
      }
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
        <Route path="/order" component={Order} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
