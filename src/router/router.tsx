import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SidebarLayout from 'src/core/layout/SidebarLayout';
import BaseLayout from 'src/core';

import { GuardedRoute } from './guarded-routes';
import {
  LOGIN,
  SIGNUP,
  TRANSACTIONS,
  ERROR_PAGE
} from './../shared/constants/constants';

import { SuspenseLoader } from 'src/shared/components/index';
import * as ROUTES from '../shared/constants/routes';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Login = Loader(lazy(() => LOGIN));
const ErrorPage = Loader(lazy(() => ERROR_PAGE));

const SignUp = Loader(lazy(() => SIGNUP));

// Dashboards

const Transactions = Loader(lazy(() => TRANSACTIONS));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />
      }
    ]
  },
  {
    path: 'signup',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <SignUp />
      }
    ]
  },
  {
    path: ROUTES.DASHBOARD,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={ROUTES.TRANSACTIONS} replace />
      },
      {
        path: ROUTES.TRANSACTIONS,
        element: <GuardedRoute component={Transactions} />
      }
    ]
  },
  {
    path: ROUTES.ERROR_PAGE,
    element: <ErrorPage />
  }
];

export default routes;
