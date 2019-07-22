import React from 'react';
import './index.scss';
import InputForm from '../../components/input-form';
import InputButton from '../../components/input-button';
import useForm from '../../components/custom-hooks/useForm';
import { firebaseAuth, createUserProfile } from '../../firebase.config';

const SignUp = () => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(
    {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    submit
  );

  async function submit() {
    const { email, displayName, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, { displayName });
      resetValues();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sign-in-up">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Display Name"
          name="displayName"
          type="text"
          value={values.displayName}
          onChange={handleChange}
          required
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <InputForm
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <InputButton type="submit">Sign Up</InputButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
