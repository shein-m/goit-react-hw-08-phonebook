import { NavLink } from 'react-router-dom';
import { AuthNavigationNav } from './authNavigation.styled';

export const AuthNavigation = () => {
  return (
    <AuthNavigationNav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </AuthNavigationNav>
  );
};
