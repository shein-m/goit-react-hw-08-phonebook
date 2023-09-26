import { useSelector } from 'react-redux';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { AppBarHeader, AppBarWrapper } from './appBar.styled';
import { Container } from 'components/Container';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBarHeader>
      <Container>
        <AppBarWrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </AppBarWrapper>
      </Container>
    </AppBarHeader>
  );
};
