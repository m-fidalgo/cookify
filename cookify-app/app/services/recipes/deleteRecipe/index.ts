import { request } from 'app/services/config';
import { buildEndpoint } from 'app/utils';

import { RECIPE_ENDPOINT } from '../config';

export const deleteRecipe = async (id: number) => {
  return await request({
    path: buildEndpoint(RECIPE_ENDPOINT, id.toString()),
    method: 'delete',
  });
};
