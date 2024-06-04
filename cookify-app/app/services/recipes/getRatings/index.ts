import { request } from 'app/services/config';
import { Rating } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RECIPE_RATINGS_ENDPOINT } from './config';

export const getRatings = async (id: number) => {
  return (await request({
    path: buildEndpoint(RECIPE_RATINGS_ENDPOINT, id.toString()),
    method: 'get',
  })) as Rating[];
};
