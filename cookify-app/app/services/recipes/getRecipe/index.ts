import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RECIPE_ENDPOINT } from '../config';

export const getRecipe = async (id: number) => {
  return (await request({
    path: buildEndpoint(RECIPE_ENDPOINT, id.toString()),
    method: 'get',
  })) as Recipe;
};
