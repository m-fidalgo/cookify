import { StyleProps } from './styles';

export type CardProps = {
  imageUrl: string;
  title: string;
  onPress: () => void;
} & StyleProps;
