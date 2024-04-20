export type StarRatingProps =
  | {
      rating?: undefined;
      onFinishRating: (rating: number) => void;
    }
  | {
      rating: number;
      onFinishRating?: undefined;
    };
