import { API_BASE_URL } from '@env';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { RequestMethod } from 'app/types';
import { getTokens, setTokens } from 'app/utils';

import { refreshToken, verifyToken } from './auth';

type RequestParams = {
  path: string;
  method: RequestMethod;
  data?: object;
  params?: object;
  onError?: (e: any) => void;
};

const api = applyCaseMiddleware(
  axios.create({
    baseURL: API_BASE_URL,
  })
);

const getAuthToken = async () => {
  const { access, refresh } = await getTokens();
  if (!access) return;

  const verified = await verifyToken({ token: access });
  if (verified) return access;

  if (!refresh) return;

  const response = await refreshToken({ refresh: refresh });
  if (!response || !response.access) return;

  setTokens({ access: response.access });

  return response.access;
};

api.interceptors.request.use(async (config) => {
  if (!config.url?.includes('auth')) {
    const token = await getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

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
    onError?.(error);
  }
};
