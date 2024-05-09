export type CarouselItem = {
  id: number;
  imageUrl?: string;
  title: string;
};

export type CarouselSectionProps = {
  title: string;
  emptyResultsMessage: string;
  data: CarouselItem[];
  mini?: boolean;
  onPressItem: (id: number) => void;
  onPressSeeMore?: () => void;
};
