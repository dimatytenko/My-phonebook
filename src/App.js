import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Global } from '@emotion/react';

import { authOperations, authSelectors } from './redux/auth';
import { themeSelectors } from './redux/theme';

import Loader from 'components/Loader';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import Layout from './views/Layout';
import { GlobalStyles } from './GlobalStyles';
import { ThemeLight, ThemeDark } from './Theme';

const HomeView = lazy(() => import('views/HomeView/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const NotFoundView = lazy(() => import('views/NotFoundView/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const isTheme = useSelector(themeSelectors.getTheme);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <ThemeProvider theme={!isTheme ? ThemeLight : ThemeDark}>
          <Global styles={GlobalStyles} />

          <Suspense fallback={<Loader width={200} height={200} />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <PublicRoute>
                      <HomeView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="register"
                  element={
                    <PublicRoute redirectTo="/contacts" restricted>
                      <RegisterView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="login"
                  element={
                    <PublicRoute redirectTo="/contacts" restricted>
                      <LoginView />
                    </PublicRoute>
                  }
                />

                <Route
                  path="contacts"
                  element={
                    <PrivateRoute>
                      <ContactsView />
                    </PrivateRoute>
                  }
                />

                <Route path="*" element={<NotFoundView />} />
              </Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </>
    )
  );
}
