import { Category, Recipe } from 'app/types';

export const EMPTY_INGREDIENT = {
  text: undefined,
};

export const EMPTY_PREPARATION_STEP = {
  position: undefined,
  text: undefined,
};

export const DEFAULT_VALUES = {
  title: undefined,
  categories: [],
  time: undefined,
  servings: undefined,
  ingredients: [EMPTY_INGREDIENT, EMPTY_INGREDIENT],
  preparationSteps: [EMPTY_PREPARATION_STEP, EMPTY_PREPARATION_STEP],
  images: [],
};

export const getDefaultValuesFromRecipe = (recipe: Recipe) => {
  return {
    title: recipe.title,
    categories: recipe.categories.map((category: Category) => category.id.toString()),
    time: recipe.time,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    preparationSteps: recipe.preparationSteps,
    images: [],
  };
};
