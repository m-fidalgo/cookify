import { atom, atomFamily, selector } from 'recoil';

import { SearchRecipesResponse, searchRecipes } from 'app/services';
import { PaginationResponse, Recipe } from 'app/types';

import {
  CURRENT_RECIPE_KEY,
  PAGINATION_RESPONSE_KEY,
  RECIPE_IDS_LIST_KEY,
  RECIPE_KEY,
  RECIPE_PAGE_KEY,
  SEARCH_RECIPES_KEY,
} from './keys';

export const currentRecipeState = atom<Recipe | undefined>({
  key: CURRENT_RECIPE_KEY,
  default: undefined,
});

export const recipeStateF = atomFamily<Recipe | undefined, number>({
  key: RECIPE_KEY,
  default: undefined,
});

export const recipeIdsListState = atom<number[] | undefined>({
  key: RECIPE_IDS_LIST_KEY,
  default: undefined,
});

export const recipePageState = atom<number>({
  key: RECIPE_PAGE_KEY,
  default: 1,
});

export const recipesGetState = selector<SearchRecipesResponse>({
  key: SEARCH_RECIPES_KEY,
  get: async ({ get }) => {
    const page = get(recipePageState);

    return searchRecipes({ page });
  },
});

export const recipePaginationState = atom<PaginationResponse | undefined>({
  key: PAGINATION_RESPONSE_KEY,
  default: undefined,
});
