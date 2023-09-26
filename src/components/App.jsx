import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { getRefresh } from 'redux/auth/auth-selectors';
import { SharedLayout } from './SharedLayout';

const Register = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getRefresh);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefresh && (
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/contacts" />} />

            <Route path="/" element={<SharedLayout />}>
              <Route path="*" element={<NotFound />} />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <Register />
                  </PublicRoute>
                }
              />

              <Route
                path="login"
                index
                element={
                  <PublicRoute restricted>
                    <Login />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
