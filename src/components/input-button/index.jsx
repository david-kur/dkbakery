import React from 'react';
import './index.scss';

const InputButton = ({ children, isGoogleSignIn, ...restProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} input-button`}
    {...restProps}
  >
    {children}
  </button>
);

export default InputButton;
