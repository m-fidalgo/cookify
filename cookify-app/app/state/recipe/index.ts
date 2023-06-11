import { atom, atomFamily, selector } from 'recoil';

import { RecipeFilterParams, SearchRecipesResponse, searchRecipes } from 'app/services';
import { PaginationResponse, Recipe } from 'app/types';

import {
  CURRENT_RECIPE_KEY,
  PAGINATION_RESPONSE_KEY,
  RECIPE_FILTERS_KEY,
  RECIPE_HAS_FILTERS_KEY,
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

export const recipeFiltersState = atom<RecipeFilterParams | undefined>({
  key: RECIPE_FILTERS_KEY,
  default: undefined,
});

export const recipeHasFiltersState = selector<boolean>({
  key: RECIPE_HAS_FILTERS_KEY,
  get: ({ get }) => {
    const filters = get(recipeFiltersState);

    if (!filters) return false;
    if (
      filters.categoryIds ||
      filters.creatorId ||
      filters.difficulties ||
      filters.filter ||
      filters.liked ||
      filters.servings ||
      filters.time
    )
      return true;

    return false;
  },
});

export const recipesGetState = selector<SearchRecipesResponse>({
  key: SEARCH_RECIPES_KEY,
  get: async ({ get }) => {
    const page = get(recipePageState);
    const filters = get(recipeFiltersState);

    return searchRecipes({ page, ...filters });
  },
});

export const recipePaginationState = atom<PaginationResponse | undefined>({
  key: PAGINATION_RESPONSE_KEY,
  default: undefined,
});
