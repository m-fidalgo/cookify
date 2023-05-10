import { request } from 'app/services/config';
import { AuthUser } from 'app/types';

import { AUTH_ENDPOINT } from '../config';
import { LoginData } from './types';

export * from './types';

export const login = async (data: LoginData) => {
  return (await request({
    path: AUTH_ENDPOINT,
    method: 'post',
    data,
  })) as AuthUser;
};
