import React from 'react';
import './index.scss';

const Spinner = WrappedComponent => ({ isLoading, ...restProps }) => {
  return isLoading ? (
    <div className="overlay">
      <div className="container" />
    </div>
  ) : (
    <WrappedComponent {...restProps} />
  );
};

export default Spinner;
