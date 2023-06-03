import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { SAVE_RECIPE_ENDPOINT } from './config';
import { SaveRecipeParams } from './types';

export const saveRecipe = async (id: number, params: SaveRecipeParams) => {
  return (await request({
    path: buildEndpoint(SAVE_RECIPE_ENDPOINT, id.toString()),
    method: 'post',
    params,
  })) as Recipe;
};
