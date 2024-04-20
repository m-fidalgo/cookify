import { request } from 'app/services/config';
import { Rating } from 'app/types';

import { RATINGS_ENDPOINT } from '../config';
import { CreateRatingParams } from './types';

export * from './types';

export const createRating = async (params: CreateRatingParams) => {
  return (await request({
    path: RATINGS_ENDPOINT,
    method: 'post',
    data: params,
  })) as Rating;
};
