import { request } from 'app/services/config';
import { Rating } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RATING_ENDPOINT } from '../config';

export const updateRating = async (
  id: number,
  params: Partial<Pick<Rating, 'text' | 'rating'>>
) => {
  return (await request({
    path: buildEndpoint(RATING_ENDPOINT, id.toString()),
    method: 'patch',
    data: params,
  })) as Rating;
};
