import React from 'react';
import './index.scss';
import InputForm from '../../components/input-form';
import InputButton from '../../components/input-button';
import useForm from '../../components/custom-hooks/useForm';
import { signInWithGoogle, firebaseAuth } from '../../firebase.config';

const SignIn = () => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(
    {
      email: '',
      password: ''
    },
    submit
  );
  async function submit() {
    const { email, password } = values
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password)
      resetValues()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-in-up">
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
