import { Ingredient, Optional, PreparationStep, Recipe } from 'app/types';

export type RecipeFormProps = {
  recipe?: Recipe;
};

export type FormValues = {
  title: string;
  categories: string[];
  time: number;
  servings: string;
  ingredients: Optional<Ingredient, 'id'>[];
  preparationSteps: Optional<PreparationStep, 'id'>[];
  images: string[];
};
