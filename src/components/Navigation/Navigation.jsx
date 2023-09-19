import { NavLink } from 'react-router-dom';
import { NavigationNav } from './navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavigationNav>
      <h2>Contacts List</h2>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationNav>
  );
};
