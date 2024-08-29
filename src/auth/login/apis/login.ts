import { AxiosRequestConfig } from 'axios';
import { apiPost, apiGet } from '../../../shared/utils/api-request';

interface TAxiosCustomConfig {
  excludeTokenIdFromHeader?: boolean;
}

interface Config extends AxiosRequestConfig {
  custom?: TAxiosCustomConfig;
}

// User verify With OTP
export const userVerifyWithOTP = async (userData: object) => {
  const res = await apiPost('/auth/send-otp', userData);
  return res.data;
};

// user Login with OTP
export const loginWithOTP = async (userData: object) => {
  const res = await apiPost('/auth/verify-otp', userData);
  return res.data;
};

// Login API Integration
export const loginAPI = async (userData: object) => {
  // Created config to exclude authorization for login API.
  const config = {} as Config;
  config.custom = {
    excludeTokenIdFromHeader: true
  };
  const res = await apiPost('/auth/oauth-login', userData, config);
  return res.data;
};

// Login API Integration
export const logOutAPI = async (userData: any) => {
  return Promise.resolve('TODO: call User Logout API: ');
};

export const session = async () => {
  const res = await apiGet('vault-login/session');
  return res.data;
};
