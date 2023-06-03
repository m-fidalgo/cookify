import { Ingredient, PreparationStep } from 'app/types';

export type CreateRecipeParams = {
  title: string;
  time: number;
  servings: string;
  creator: number;
  categories: number[];
  ingredients: Omit<Ingredient, 'id'>[];
  preparationSteps: Omit<PreparationStep, 'id'>[];
};
