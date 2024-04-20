import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RECIPE_ENDPOINT } from '../config';
import { CreateRecipeParams } from '../createRecipe';

export const updateRecipe = async (id: number, params: CreateRecipeParams) => {
  return (await request({
    path: buildEndpoint(RECIPE_ENDPOINT, id.toString()),
    method: 'patch',
    data: params,
  })) as Recipe;
};
