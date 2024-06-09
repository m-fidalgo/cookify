import { Recipe } from 'app/types';

export type MenuSectionProps = {
  menu: Recipe[];
  onPressItem: (id: number) => void;
};
