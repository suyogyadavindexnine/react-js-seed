import axios from 'axios';
import { SERVER_API_URL } from '../../shared/constants/constants';
import { Signout } from '../../shared/utils/signout';

const axiosInstance = axios.create({
  // baseURL: SERVER_API_URL
});

axiosInstance.interceptors.request.use(
  (request) => {
    const id_token = localStorage.getItem('id_token');
    const access_token = localStorage.getItem('access_token');
    if (id_token) {
      request.headers['Authorization'] = id_token;
      request.headers['AccessToken'] = access_token;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === `${SERVER_API_URL}getaccesstoken`
    ) {
      Signout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
