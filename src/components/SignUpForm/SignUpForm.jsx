import { useEffect, useState } from 'react';
import {
  SignUpFormButton,
  SignUpFormDiv,
  SignUpFormLabel,
  SignUpFormWrapper,
} from './signUpForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { authSlice } from 'redux/auth/auth-slice';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    dispatch(authSlice.actions.removeError());
  }, [dispatch]);

  const handleChange = event => {
    const value = event.target.value;

    switch (event.target.name) {
      case 'name':
        setName(value);
        break;

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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <SignUpFormWrapper onSubmit={handleSubmit} autoComplete="true">
      <SignUpFormDiv>
        <SignUpFormLabel htmlFor="signUpName">Name</SignUpFormLabel>
        <input
          id="signUpName"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </SignUpFormDiv>

      <SignUpFormDiv>
        <SignUpFormLabel htmlFor="signUpEmail">Email</SignUpFormLabel>
        <input
          id="signUpEmail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </SignUpFormDiv>

      <SignUpFormDiv>
        <SignUpFormLabel htmlFor="signUpPassword">Password</SignUpFormLabel>
        <input
          id="signUpPassword"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </SignUpFormDiv>

      <SignUpFormButton type="submit">Sign Up</SignUpFormButton>
      <span style={{ color: 'red' }}>
        {error === 400 && 'Error, try again'}
      </span>
    </SignUpFormWrapper>
  );
};
