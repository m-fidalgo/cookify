import { request } from 'app/services/config';
import { Recipe } from 'app/types';

import { MENU_ENDPOINT } from './config';

export const getMenu = async () => {
  return (await request({
    path: MENU_ENDPOINT,
    method: 'get',
  })) as Recipe[];
};
