import { API_BASE_URL } from '@env';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { RequestMethod } from 'app/types';

type RequestParams = {
  path: string;
  method: RequestMethod;
  data?: object;
  params?: object;
  onError?: (e: any) => void;
};

export const api = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://192.168.0.38:6000',
  })
);

export const request = async ({
  path,
  method,
  data,
  params,
  onError,
}: RequestParams): Promise<object | undefined> => {
  try {
    const response = await api.request({ url: path, method, data, params });
    return response.data;
  } catch (error) {
    console.log(error);
    onError?.(error);
  }
};
