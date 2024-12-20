import { AxiosRequestConfig } from 'axios';
import axiosInstance from '../../core/interceptors/axios-instance';
import { SERVER_API_URL } from '../constants/constants';

export interface TAxiosCustomConfig {
  variables?: string;
  setLoading?: (res: true | false) => void;
}
export interface Config extends AxiosRequestConfig {
  custom?: TAxiosCustomConfig;
}

export async function apiGet<T = any>(
  resource: string,
  config?: AxiosRequestConfig
) {
  return axiosInstance.get<T>(`${SERVER_API_URL}${resource}`, config);
}

export async function apiPost<T = any>(
  resource: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  return axiosInstance.post<T>(resource, data, config);
}

export async function apiPut<T = any>(
  resource: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  return axiosInstance.put<T>(resource, data, config);
}

export async function apiDelete<T = any>(
  resource: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  return axiosInstance.delete<T>(resource, { data: data });
}
