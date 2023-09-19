import { useEffect, useState } from 'react';
import {
  SignInFormButton,
  SignInFormDiv,
  SignInFormLabel,
  SignInFormWrapper,
} from './signInForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { authSlice } from 'redux/auth/auth-slice';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    dispatch(authSlice.actions.removeError());
  }, [dispatch]);

  const handleChange = event => {
    const value = event.target.value;

    switch (event.target.name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    resetForm();
  };

  return (
    <SignInFormWrapper onSubmit={handleSubmit} autoComplete="true">
      <SignInFormDiv>
        <SignInFormLabel htmlFor="singInEmail">Email</SignInFormLabel>
        <input
          id="singInEmail"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </SignInFormDiv>
      <SignInFormDiv>
        <SignInFormLabel htmlFor="signInPassword">Password</SignInFormLabel>
        <input
          id="signInPassword"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
      </SignInFormDiv>
      <SignInFormButton type="submit">Sign In</SignInFormButton>
      <span style={{ color: 'red' }}>
        {error === 400 && 'Error, try again'}
      </span>
    </SignInFormWrapper>
  );
};
