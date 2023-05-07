import { request } from 'app/services/config';
import { paginationParams } from 'app/utils';

import { RECIPES_ENDPOINT } from '../config';
import { SearchRecipesParams, SearchRecipesResponse } from './types';

export const searchRecipes = async ({ page, pageSize }: SearchRecipesParams) => {
  const params = paginationParams({ page, pageSize });
  return (await request({
    path: `${RECIPES_ENDPOINT}${params}`,
    method: 'get',
  })) as SearchRecipesResponse;
};
