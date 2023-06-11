import { StyleProps } from './styles';

export type ButtonProps = {
  onPress: () => void;
  small?: boolean;
} & Partial<StyleProps>;
