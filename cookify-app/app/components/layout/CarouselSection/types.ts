export type CarouselItem = {
  id: number;
  imageUrl: string;
  title: string;
};

export type CarouselSectionProps = {
  title: string;
  data: CarouselItem[];
  onPressItem: (id: number) => void;
  onPressSeeMore: () => void;
};
