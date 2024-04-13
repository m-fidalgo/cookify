import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { IMAGE_ENDPOINT } from '../config';

export const deleteImage = async (id: number) => {
  return await request({
    path: buildEndpoint(IMAGE_ENDPOINT, id.toString()),
    method: 'delete',
  });
};
