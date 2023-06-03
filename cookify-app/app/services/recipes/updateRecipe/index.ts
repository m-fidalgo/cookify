import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { CreateRecipeParams } from '../createRecipe';
import { RECIPE_ENDPOINT } from '../getRecipe/config';

export const updateRecipe = async (id: number, params: CreateRecipeParams) => {
  return (await request({
    path: buildEndpoint(RECIPE_ENDPOINT, id.toString()),
    method: 'put',
    data: params,
  })) as Recipe;
};
