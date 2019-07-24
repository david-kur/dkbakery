import React from 'react';
import './index.scss';

const InputButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  isDisabled,
  ...restProps
}) => (
  <button
    disabled={isDisabled}
    className={`${isInverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } ${isDisabled ? 'is-disabled' : ''} input-button`}
    {...restProps}
  >
    {children}
  </button>
);

export default InputButton;
