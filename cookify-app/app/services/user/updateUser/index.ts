import { request } from 'app/services/config';
import { User } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { USER_ENDPOINT } from '../config';
import { UserParams } from '../types';

export const updateUser = async (id: number, params: Partial<UserParams>) => {
  return (await request({
    path: buildEndpoint(USER_ENDPOINT, id.toString()),
    method: 'patch',
    data: params,
  })) as User;
};
