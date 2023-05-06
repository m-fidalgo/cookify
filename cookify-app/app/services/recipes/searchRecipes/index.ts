import { request } from 'app/services/config';

import { RECIPES_ENDPOINT } from '../config';
import { SearchRecipesParams, SearchRecipesResponse } from './types';

export const searchRecipes = async ({ page }: SearchRecipesParams) => {
  const path = `${RECIPES_ENDPOINT}?page=${page}`;
  return (await request({ path, method: 'get' })) as SearchRecipesResponse;
};
