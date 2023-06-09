import { atom, selector } from 'recoil';

import { RecipeFilterParams } from 'app/services';
import { Recipe } from 'app/types';

import {
  CURRENT_RECIPE_KEY,
  RECIPE_FILTERS_CHANGED_KEY,
  RECIPE_FILTERS_KEY,
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

export const recipeFiltersChangedState = atom<boolean>({
  key: RECIPE_FILTERS_CHANGED_KEY,
  default: false,
});
