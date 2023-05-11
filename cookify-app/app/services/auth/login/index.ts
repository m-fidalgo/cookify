import { request } from 'app/services/config';
import { AuthUser } from 'app/types';

import { LOGIN_ENDPOINT } from './config';
import { LoginData } from './types';

export * from './types';

export const login = async (data: LoginData) => {
  return (await request({
    path: LOGIN_ENDPOINT,
    method: 'post',
    data,
  })) as AuthUser;
};
