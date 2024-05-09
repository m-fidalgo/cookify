import { SearchRecipesParams } from 'app/services';
import { Recipe } from 'app/types';

type RecipesProps =
  | {
      params: SearchRecipesParams;
      recipes?: undefined;
    }
  | {
      params?: undefined;
      recipes: Recipe[];
    };

export type RecipesPreviewSectionProps = RecipesProps & {
  title: string;
  mini?: boolean;
  onPressItem: (id: number) => void;
  onPressSeeMore?: () => void;
};
