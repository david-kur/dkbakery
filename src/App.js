import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
