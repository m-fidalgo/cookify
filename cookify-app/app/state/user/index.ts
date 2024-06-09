import { atom, selector } from 'recoil';

import { getRecommendedRecipes } from 'app/services';
import { getMenu } from 'app/services/user/getMenu';
import { AuthUser, Recipe } from 'app/types';

import { CURRENT_USER_KEY, MENU_GET_KEY, RECOMMENDED_RECIPES_GET_KEY } from './keys';

export const currentUserState = atom<AuthUser | undefined>({
  key: CURRENT_USER_KEY,
  default: undefined,
});

export const recommendedRecipesFetchState = selector<Recipe[]>({
  key: RECOMMENDED_RECIPES_GET_KEY,
  get: async () => {
    const recipes = await getRecommendedRecipes();
    return recipes;
  },
});

export const menuFetchState = selector<Recipe[]>({
  key: MENU_GET_KEY,
  get: async () => {
    const recipes = await getMenu();
    return recipes;
  },
});
