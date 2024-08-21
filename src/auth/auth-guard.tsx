import React, { createContext, useContext, useState } from 'react';

type AuthProviderType = {
  accessToken: string;
  login: (authToken: string) => void;
  logout: () => any;
};

export const useAuthProvider = () => {
  // console.log('auth calling');

  const [accessToken, setAccessToken] = useState<string>(
    localStorage.getItem('accessToken') || ''
  );

  const login = (authToken: string) => {
    setAccessToken(authToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken')
    setAccessToken('');
  };
  return {
    accessToken,
    login,
    logout
  };
};
const defaultAuthContext = {};

const AuthContext = createContext<AuthProviderType>(defaultAuthContext as any);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: any }) => {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth as any}>{children}</AuthContext.Provider>
  );
};
