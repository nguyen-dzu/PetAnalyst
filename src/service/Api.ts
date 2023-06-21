import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';

const instance = axios.create({
  baseURL: '',
  validateStatus(status) {
    return (
      status >= 200 &&
      status < 300 &&
      status <= 500 &&
      status !== 401 &&
      status !== 406
    );
  },
  timeout: 4000,
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return Promise.resolve(config);
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
