import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthguardContext';
import * as ROUTES from '../shared/constants/routes';

interface IGuardedRouteProps {
  component: React.ComponentType<any>;
  path?: string;
  allowedRoles?: string[];
}

export const GuardedRoute = ({
  component: RouteComponent,
  allowedRoles = [], // Default value for allowedRoles
  path = '', // Default value for path
}: IGuardedRouteProps) => {
  const { accessToken, roles, logout } = useAuth();

  if (
    accessToken &&
    ((allowedRoles.length > 0 && roles?.some(role => allowedRoles.includes(role))) || allowedRoles.length === 0)
  ) {
    return <RouteComponent />;
  } else if (accessToken) {
    return <Navigate to={ROUTES.ERROR_PAGE} replace />;
  } else {
    logout();
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
};
