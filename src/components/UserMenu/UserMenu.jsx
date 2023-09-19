import { useDispatch, useSelector } from 'react-redux';
import { UserMenuButton, UserMenuDiv, UserMenuEmail } from './userMenu.styled';
import { logout } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <UserMenuDiv>
      <UserMenuEmail>{email}</UserMenuEmail>
      <UserMenuButton type="button" onClick={() => dispatch(logout())}>
        Logout
      </UserMenuButton>
    </UserMenuDiv>
  );
};
