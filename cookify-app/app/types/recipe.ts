import { Image } from 'react-native';

import { Difficulty } from './difficulty';
import { Ingredient } from './ingredient';
import { PreparationStep } from './preparationStep';
import { User } from './user';

export type Recipe = {
  id: number;
  title: string;
  time: number;
  servings: string;
  creator: User;
  difficulty: Difficulty;
  categories: [];
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
  images: Image[];
};
