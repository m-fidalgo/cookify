export type CreateRecipeParams = {
  title: string;
  time: number;
  servings: string;
  creator: number;
  categories: number[];
  ingredients: string[];
  preparationSteps: string[];
};
