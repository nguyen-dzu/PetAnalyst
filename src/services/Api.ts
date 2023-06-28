import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
export const rapidApiKey = '96191cad6emsh052d12666af54c3p1d2720jsn8ae6dd9c656f';
export const rapidAPIHost = 'dog-breeds2.p.rapidapi.com';
export enum AcceptType {
  json = 'application/json',
  formData = 'multipart/form-data',
  urlencode = 'application/x-www-form-urlencoded',
  'X-RapidAPI-Key' = '57dfbf9d6dmsh34cc6ed0d1de8fep1bd656jsn5dccd13cfd47',
  'X-RapidAPI-Host' = 'dog-breeds2.p.rapidapi.com',
}

const defaultHeader = {
  Accept: AcceptType.json,
  'Content-Type': AcceptType.json,
  'X-RapidAPI-Key': AcceptType['X-RapidAPI-Key'],
  'X-RapidAPI-Host': AcceptType['X-RapidAPI-Host'],
};

const instance = axios.create({
  baseURL: 'https://dog-breeds2.p.rapidapi.com/',
  validateStatus(status) {
    return (
      status >= 200 &&
      status < 300 &&
      status <= 500 &&
      status !== 401 &&
      status !== 406
    );
  },
});

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return Promise.resolve(response);
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
export class apiClient {
  config: AxiosRequestConfig;
  headers: any;
  constructor() {
    this.config = {};
    this.headers = {
      ...defaultHeader,
    };
  }

  get = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const {headers, ...rest} = option;
    if (baseUrl) {
      instance.defaults.baseURL = baseUrl;
    }
    // console.log('==========');
    // console.log(url);
    // console.log(body);
    // console.log(option);
    // console.log(this.headers);
    return instance.get(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };
}

// post = (url: string, body?: any, option?: any, baseUrl?: string) => {
//   option = option || {};
//   const {headers, ...rest} = option;
//   if (baseUrl) {
//     instance.defaults.baseURL = baseUrl;
//   }
//   // console.log(instance.defaults.baseURL);
//   return instance.post(url, body, {
//     ...this.config,
//     headers: {
//       ...this.headers,
//       ...headers,
//     },
//     ...rest,
//   });
// };

// postForm = (url: string, body?: any, option?: any) => {
//   option = option || {};
//   const {headers, ...rest} = option;
//   return instance.post(url, body, {
//     ...this.config,
//     headers: {
//       ...this.headers,
//       ...formHeader,
//       ...headers,
//     },
//     ...rest,
//   });
// };

// delete = (url: string, body?: any, option?: any) => {
//   option = option || {};
//   const {headers, ...rest} = option;
//   return instance.delete(url, {
//     ...this.config,
//     headers: {
//       ...this.headers,
//       ...headers,
//     },
//     data: {
//       ...body,
//     },
//     ...rest,
//   });
// };

// putAvatar = (url: string, body?: any, option?: any) => {
//   option = option || {};
//   const {headers, ...rest} = option;
//   return instance.put(url, {
//     ...this.config,
//     params: {
//       ...body,
//     },
//     headers: {
//       ...this.headers,
//       ...headers,
//     },
//     ...rest,
//   });
// };

// put = (url: string, body?: any, option?: any, baseUrl?: string) => {
//   option = option || {};
//   const {headers, ...rest} = option;
//   if (baseUrl) {
//     instance.defaults.baseURL = baseUrl;
//   }
//   return instance.put(url, body, {
//     ...this.config,
//     headers: {
//       ...this.headers,
//       ...headers,
//     },
//     ...rest,
//   });
// };

// patch = (url: string, body?: any, option?: any) => {
//   const options = option || {};
//   const {headers, ...rest} = options;
//   return instance.patch(url, body, {
//     ...this.config,
//     headers: {
//       ...this.headers,
//       ...headers,
//     },
//     ...rest,
//   });
// };
