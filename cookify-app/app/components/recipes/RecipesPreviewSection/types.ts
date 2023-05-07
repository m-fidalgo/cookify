import { SearchRecipesParams } from 'app/services';

export type RecipesPreviewSectionProps = {
  title: string;
  params: SearchRecipesParams;
  onPressItem: (id: number) => void;
  onPressSeeMore: () => void;
};
