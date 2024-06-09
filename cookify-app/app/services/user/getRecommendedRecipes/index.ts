import { request } from 'app/services/config';
import { Recipe } from 'app/types';

import { RECOMMENDED_RECIPES_ENDPOINT } from './config';

export const getRecommendedRecipes = async () => {
  return (await request({
    path: RECOMMENDED_RECIPES_ENDPOINT,
    method: 'get',
  })) as Recipe[];
};
