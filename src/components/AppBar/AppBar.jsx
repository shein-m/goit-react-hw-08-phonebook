import { useSelector } from 'react-redux';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <div className="header-wrapper">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </div>
    </header>
  );
};
