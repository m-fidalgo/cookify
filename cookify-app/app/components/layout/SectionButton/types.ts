import { StyleProps } from './styles';

export type SectionButtonProps = {
  title: string;
  onPress: () => void;
} & StyleProps;
