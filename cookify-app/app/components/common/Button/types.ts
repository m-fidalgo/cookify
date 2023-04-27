import { StyleProps } from './styles';

export type ButtonProps = {
  onPress: () => void;
} & Partial<StyleProps>;
