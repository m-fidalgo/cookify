import { StyleProps } from './styles';

export type ButtonProps = {
  onPress: () => void;
  small?: boolean;
  disabled?: boolean;
} & Partial<StyleProps>;
