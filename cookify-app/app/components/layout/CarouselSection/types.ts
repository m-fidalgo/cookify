export type CarouselItem = {
  id: number;
  imageUrl?: string;
  title: string;
};

export type CarouselSectionProps = {
  title: string;
  emptyResultsMessage: string;
  data: CarouselItem[];
  onPressItem: (id: number) => void;
  onPressSeeMore: () => void;
};
