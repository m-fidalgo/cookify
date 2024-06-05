import { StyleProps } from './styles';

export type ChipProps = {
  text: string;
  onRemove?: () => void;
} & StyleProps;
