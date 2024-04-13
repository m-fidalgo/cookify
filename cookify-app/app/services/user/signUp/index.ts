import { request } from 'app/services/config';
import { AuthUser } from 'app/types';

import { USERS_ENDPOINT } from '../config';
import { UserParams } from '../types';

export const signUp = async (data: UserParams) => {
  return (await request({
    path: USERS_ENDPOINT,
    method: 'post',
    data,
  })) as AuthUser;
};
