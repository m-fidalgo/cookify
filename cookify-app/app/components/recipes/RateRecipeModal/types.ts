import { ModalProps } from 'app/components/common';
import { Rating } from 'app/types';

export type RateRecipeModalProps = ModalProps & {
  recipeId: number;
  rating?: Rating;
  onDone: () => void;
};

export type FormValues = {
  ratingValue: number;
  text: string;
};
