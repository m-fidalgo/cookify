import { request } from 'app/services/config';
import { Recipe } from 'app/types';

import { RECIPES_ENDPOINT } from '../config';
import { CreateRecipeParams } from './types';

export * from './types';

export const createRecipe = async (params: CreateRecipeParams) => {
  return (await request({
    path: RECIPES_ENDPOINT,
    method: 'post',
    data: params,
  })) as Recipe;
};
