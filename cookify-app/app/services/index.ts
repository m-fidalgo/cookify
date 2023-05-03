import { API_BASE_URL } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: API_BASE_URL,
});

type RequestParams = {
  path: string;
  method: 'get' | 'delete' | 'patch' | 'post';
  data?: object;
};

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
