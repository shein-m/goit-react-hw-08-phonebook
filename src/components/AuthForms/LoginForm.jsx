import { useEffect, useState } from 'react';
import {
  AuthFormButton,
  AuthFormDiv,
  AuthFormLabel,
  AuthFormWrapper,
  AuthFormInput,
  AuthFormIconWrapper,
} from './AuthForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { authSlice } from 'redux/auth/auth-slice';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';

export const LoginForm = () => {
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

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(login({ email, password })).unwrap();
      resetForm();
    } catch (err) {
      if (err) {
        setPassword('');
      }
    }
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit} autoComplete="true">
      <AuthFormLabel htmlFor="singInEmail">Email</AuthFormLabel>
      <AuthFormDiv>
        <AuthFormInput
          id="singInEmail"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <AuthFormIconWrapper>
          <HiOutlineMail size={16} />
        </AuthFormIconWrapper>
      </AuthFormDiv>
      <AuthFormLabel htmlFor="signInPassword">Password</AuthFormLabel>
      <AuthFormDiv className="last-wrapper">
        <AuthFormInput
          id="signInPassword"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <AuthFormIconWrapper>
          <HiOutlineKey size={16} />
        </AuthFormIconWrapper>
      </AuthFormDiv>
      <AuthFormButton type="submit" disabled={password === '' && error}>
        Sign In
      </AuthFormButton>
      <span style={{ color: 'red' }}>
        {error === 400 && 'Incorrect username or password.'}
      </span>
    </AuthFormWrapper>
  );
};
