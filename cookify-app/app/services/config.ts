import { API_BASE_URL } from '@env';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { useRecoilValue } from 'recoil';

import { currentUserState } from 'app/state/user';
import { RequestMethod } from 'app/types';

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

export const request = async ({
  path,
  method,
  data,
  params,
  onError,
}: RequestParams): Promise<object | undefined> => {
  try {
    const currentUser = useRecoilValue(currentUserState);
    const headers = currentUser ? { Authorization: `Bearer ${currentUser.meta.token}` } : {};
    const response = await api.request({ url: path, method, data, params, headers });
    return response.data;
  } catch (error) {
    onError?.(error);
  }
};
