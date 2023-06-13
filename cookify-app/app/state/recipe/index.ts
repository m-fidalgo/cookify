import { atom, selector } from 'recoil';

import { RecipeFilterParams } from 'app/services';
import { Recipe } from 'app/types';

import {
  CURRENT_RECIPE_KEY,
  RECIPE_FILTERS_KEY,
  RECIPE_HAS_FILTERS_KEY,
  RECIPE_PAGE_KEY,
} from './keys';

export const currentRecipeState = atom<Recipe | undefined>({
  key: CURRENT_RECIPE_KEY,
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
