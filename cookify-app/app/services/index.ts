import env from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: env.API_BASE_URL,
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
    return await api.request({ url: path, method, data });
  } catch (error) {
    console.log(error);
  }
};
