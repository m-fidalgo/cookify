import { request } from 'app/services/config';
import { buildEndpoint } from 'app/utils';

import { RATING_ENDPOINT } from '../config';

export const deleteRating = async (id: number) => {
  return await request({
    path: buildEndpoint(RATING_ENDPOINT, id.toString()),
    method: 'delete',
  });
};
