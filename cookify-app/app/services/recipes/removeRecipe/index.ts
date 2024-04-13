import { request } from 'app/services/config';
import { buildEndpoint } from 'app/utils';

import { REMOVE_RECIPE_ENDPOINT } from './config';

export const removeRecipe = async (id: number) => {
  return await request({
    path: buildEndpoint(REMOVE_RECIPE_ENDPOINT, id.toString()),
    method: 'delete',
  });
};
