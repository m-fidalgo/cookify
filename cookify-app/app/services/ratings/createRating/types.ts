import { Rating } from 'app/types/rating';

export type CreateRatingParams = Pick<Rating, 'text' | 'rating'> & {
  recipeId: number;
};
