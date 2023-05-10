import { IconProps } from '../Icon/types';

export type IconButtonProps = IconProps & {
  onPress: () => void;
};
