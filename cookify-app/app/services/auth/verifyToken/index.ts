import { request } from 'app/services/config';

import { VERIFY_TOKEN_ENDPOINT } from './config';
import { VerifyTokenData, VerifyTokenResponse } from './types';

export const verifyToken = async (data: VerifyTokenData) => {
  const response = (await request({
    path: VERIFY_TOKEN_ENDPOINT,
    method: 'post',
    data,
  })) as VerifyTokenResponse;

  if (response?.code === 'token_not_valid') return false;
  return true;
};
