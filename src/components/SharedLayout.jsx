import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const SharedLayout = () => {
  return (
    <>
      <AppBar>
        <Navigation />
        <UserMenu />
      </AppBar>
      <Suspense fallback={<div>Loading...s</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
