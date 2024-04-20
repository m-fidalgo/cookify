import * as React from 'react';
import { AirbnbRating } from 'react-native-ratings';

import { HUES } from 'app/constants';

import { StarRatingProps } from './types';

export const StarRating: React.FC<StarRatingProps> = ({ rating, onFinishRating }) => {
  return (
    <AirbnbRating
      showRating={false}
      defaultRating={rating}
      onFinishRating={onFinishRating}
      selectedColor={HUES.yellow}
      size={30}
      isDisabled={rating !== undefined}
    />
  );
};
