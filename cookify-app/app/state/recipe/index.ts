import { atom, selector } from 'recoil';

import { RecipeFilterParams, getRatings } from 'app/services';
import { Rating, Recipe } from 'app/types';

import {
  CURRENT_RECIPE_KEY,
  RECIPE_FILTERS_CHANGED_KEY,
  RECIPE_FILTERS_KEY,
  RECIPE_OFFSET_KEY,
  RECIPE_RATINGS_GET_KEY,
} from './keys';

export const currentRecipeState = atom<Recipe | undefined>({
  key: CURRENT_RECIPE_KEY,
  default: undefined,
});

export const recipeOffsetState = atom<number>({
  key: RECIPE_OFFSET_KEY,
  default: 0,
});

export const recipeFiltersState = atom<RecipeFilterParams | undefined>({
  key: RECIPE_FILTERS_KEY,
  default: undefined,
});

export const recipeFiltersChangedState = atom<boolean>({
  key: RECIPE_FILTERS_CHANGED_KEY,
  default: false,
});

export const recipeRatingsFetchState = selector<Rating[]>({
  key: RECIPE_RATINGS_GET_KEY,
  get: async ({ get }) => {
    const currentRecipe = get(currentRecipeState);
    if (!currentRecipe) return [];
    const ratings = await getRatings(currentRecipe.id);
    return ratings;
  },
});
