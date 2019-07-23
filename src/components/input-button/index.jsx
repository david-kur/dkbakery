import React from 'react';
import './index.scss';

const InputButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...restProps
}) => (
  <button
    className={`${isInverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } input-button`}
    {...restProps}
  >
    {children}
  </button>
);

export default InputButton;
