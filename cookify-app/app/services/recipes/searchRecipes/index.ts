import { request } from 'app/services/config';

import { RECIPES_ENDPOINT } from '../config';
import { SearchRecipesParams, SearchRecipesResponse } from './types';

export * from './types';

export const searchRecipes = async (params: SearchRecipesParams) => {
  return (await request({
    path: RECIPES_ENDPOINT,
    method: 'get',
    params: {
      ...params,
      difficulties: params.difficulties ? params.difficulties.join(',') : undefined,
      categoryIds: params.categoryIds ? params.categoryIds.join(',') : undefined,
    },
  })) as SearchRecipesResponse;
};
