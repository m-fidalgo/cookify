import { API_BASE_URL } from '@env';
import axios from 'axios';

import { RequestMethod } from 'app/types';

type RequestParams = {
  path: string;
  method: RequestMethod;
  data?: object;
};

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const request = async ({
  path,
  method,
  data,
}: RequestParams): Promise<object | undefined> => {
  try {
    const response = await api.request({ url: path, method, data });
    return response.data;
  } catch (error) {
    // console.log(error);
  }
};
