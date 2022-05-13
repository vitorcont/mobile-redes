import Axios, { AxiosError, AxiosResponse } from 'axios';

export enum AxiosStatus {
  Unauthorized = 401,
  Forbidden = 403,
}

interface IHandler {
  unauthorizedError: () => void;
}

const handler: IHandler = {
  unauthorizedError: () => { },
};

export const getInstance = async () => {
  const axiosInstance = Axios.create({
    baseURL: 'https://c7e0-2804-18-1852-b14d-44aa-c760-fe75-e287.ngrok.io',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(response);
      
      return response
    },
    async (err: AxiosError) => {
      if (err.response?.status === AxiosStatus.Unauthorized) {
        handler.unauthorizedError();
      } else if (err.response?.status === AxiosStatus.Forbidden) {
        // your mechanism to forbidden
      }

      return Promise.reject();
    },
  );

  return axiosInstance;
};

export const setHandleUnauthorizedError = (fn: () => void) => {
  handler.unauthorizedError = fn;
};

export default getInstance;
