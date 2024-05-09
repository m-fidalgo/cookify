import { Difficulty } from './difficulty';
import { Image } from './image';
import { Ingredient } from './ingredient';
import { PreparationStep } from './preparationStep';
import { Rating } from './rating';
import { User } from './user';

export type Recipe = {
  id: number;
  title: string;
  time: number;
  servings: string;
  isLiked?: boolean;
  averageRating?: number;
  creator: User;
  difficulty: Difficulty;
  categories: [];
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
  images: Image[];
  ratings?: Rating[];
  similarRecipes?: Recipe[];
};
