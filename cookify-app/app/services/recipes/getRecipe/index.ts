import { request } from 'app/services/config';
import { Recipe } from 'app/types';

import { RECIPES_ENDPOINT } from '../config';

export const getRecipe = async (id: number) => {
  return (await request({
    path: `${RECIPES_ENDPOINT}/${id}`,
    method: 'get',
  })) as Recipe;
};
