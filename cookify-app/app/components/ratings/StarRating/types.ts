export type StarRatingProps =
  | {
      rating?: undefined;
      onFinishRating: (rating: number) => void;
      size?: number;
    }
  | {
      rating: number;
      onFinishRating?: undefined;
      size?: number;
    };
