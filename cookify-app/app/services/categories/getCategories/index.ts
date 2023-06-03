import { request } from 'app/services/config';

import { CATEGORIES_ENDPOINT } from '../config';
import { GetCategoriesResponse } from './types';

export const getCategories = async () => {
  return (await request({
    path: CATEGORIES_ENDPOINT,
    method: 'get',
  })) as GetCategoriesResponse;
};
