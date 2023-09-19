import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container';
import { AppBar } from './AppBar/AppBar';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar>
        <Navigation />
        <UserMenu />
      </AppBar>
      <Suspense fallback={<div>Loading...s</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
