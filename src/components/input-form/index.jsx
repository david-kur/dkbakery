import React from 'react';
import './index.scss';

const InputForm = ({ label, onChange, value, ...restProps }) => (
  <div className="group">
    <input
      className="input-form"
      onChange={onChange}
      value={value}
      {...restProps}
    />
    {label ? (
      <label className={`${value ? 'shrink' : ''} input-form-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default InputForm;
