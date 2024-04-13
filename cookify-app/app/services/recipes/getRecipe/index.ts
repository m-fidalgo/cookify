import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RECIPE_ENDPOINT } from '../config';
import { GetRecipeParams } from './types';

export const getRecipe = async (id: number, params?: GetRecipeParams) => {
  return (await request({
    path: buildEndpoint(RECIPE_ENDPOINT, id.toString()),
    method: 'get',
    params,
  })) as Recipe;
};
