import { request } from 'app/services/config';
import { AuthUser } from 'app/types';

import { SIGN_UP_ENDPOINT } from './config';
import { SignUpData } from './types';

export * from './types';

export const signUp = async (data: SignUpData) => {
  return (await request({
    path: SIGN_UP_ENDPOINT,
    method: 'post',
    data,
  })) as AuthUser;
};
