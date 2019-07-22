import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Order from './pages/order';
import Auth from './pages/auth';
import { firebaseAuth } from './firebase.config';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubFromAuth = null;
    unsubFromAuth = firebaseAuth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
