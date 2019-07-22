import { useState } from 'react';

const useForm = (initValue, onSubmit) => {
  const [values, setValues] = useState(initValue);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = ({ target: { name, value } }) => {
    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    resetValues: () => setValues(initValue),
    values
  };
};

export default useForm;
