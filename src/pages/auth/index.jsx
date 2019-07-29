import React from 'react';
import './index.scss';
import SignIn from './signin';
import SignUp from './signup';

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
