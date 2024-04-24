import { request } from 'app/services/config';

import { SEARCH_RECIPES_ENDPOINT } from './config';
import { SearchRecipesParams, SearchRecipesResponse } from './types';

export * from './types';

export const searchRecipes = async (params: SearchRecipesParams) => {
  return (await request({
    path: SEARCH_RECIPES_ENDPOINT,
    method: 'post',
    params,
  })) as SearchRecipesResponse;
};
