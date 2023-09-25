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
import { register } from 'redux/auth/auth-operations';
import { authSlice } from 'redux/auth/auth-slice';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';

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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(register({ name, email, password })).unwrap();
      resetForm();
    } catch (err) {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit} autoComplete="true">
      <AuthFormLabel htmlFor="signUpName">Name</AuthFormLabel>
      <AuthFormDiv>
        <AuthFormInput
          id="signUpName"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <AuthFormIconWrapper>
          <CgProfile size={16} />
        </AuthFormIconWrapper>
      </AuthFormDiv>

      <AuthFormLabel htmlFor="signUpEmail">Email</AuthFormLabel>
      <AuthFormDiv>
        <AuthFormInput
          id="signUpEmail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <AuthFormIconWrapper>
          <HiOutlineMail size={16} />
        </AuthFormIconWrapper>
      </AuthFormDiv>

      <AuthFormLabel htmlFor="signUpPassword">Password</AuthFormLabel>
      <AuthFormDiv>
        <AuthFormInput
          id="signUpPassword"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <AuthFormIconWrapper>
          <HiOutlineKey size={16} />
        </AuthFormIconWrapper>
      </AuthFormDiv>

      <AuthFormButton type="submit">Sign Up</AuthFormButton>
      <span style={{ color: 'red' }}>
        {error === 400 && 'Email is invalid or already taken'}
      </span>
    </AuthFormWrapper>
  );
};
