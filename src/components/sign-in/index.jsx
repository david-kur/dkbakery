import React from 'react';
import './index.scss';
import InputForm from '../input-form';
import InputButton from '../input-button';
import useForm from '../custom-hooks/useForm';
import { signInWithGoogle } from '../../firebase.config';

const SignIn = () => {
  const { values, handleChange, handleSubmit } = useForm(submit);
  function submit() {
    console.log(values);
  }

  return (
    <div className="sign-in">
      <h2>Have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons">
          <InputButton type="submit">Sign In</InputButton>
          <InputButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </InputButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
