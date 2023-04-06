import axios from 'axios';
import { getTokenCookie } from 'utils/cookies';
const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8081/',
});

AxiosInstance.interceptors.request.use(
  (config) => {
    let token = getTokenCookie()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data or handle any common errors here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;



