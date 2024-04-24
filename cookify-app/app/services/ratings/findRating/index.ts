import { request } from 'app/services/config';
import { Rating } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { FIND_RATING_ENDPOINT } from './config';

export const findRating = async (id: number) => {
  return (await request({
    path: buildEndpoint(FIND_RATING_ENDPOINT, id.toString()),
    method: 'get',
  })) as Partial<Rating>;
};
