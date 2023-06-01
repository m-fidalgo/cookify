import { request } from 'app/services/config';

import { REFRESH_TOKEN_ENDPOINT } from './config';
import { RefreshTokenData, RefreshTokenResponse } from './types';

export * from './config';

export const refreshToken = async (data: RefreshTokenData) => {
  return (await request({
    path: REFRESH_TOKEN_ENDPOINT,
    method: 'post',
    data,
  })) as RefreshTokenResponse;
};
