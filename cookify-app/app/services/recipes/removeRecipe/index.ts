import { request } from 'app/services/config';
import { Recipe } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { SaveRecipeParams } from '../saveRecipe/types';
import { REMOVE_RECIPE_ENDPOINT } from './config';

export const removeRecipe = async (id: number, params: SaveRecipeParams) => {
  return (await request({
    path: buildEndpoint(REMOVE_RECIPE_ENDPOINT, id.toString()),
    method: 'post',
    params,
  })) as Recipe;
};
