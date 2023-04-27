import { Hue } from 'app/constants';
import { IconName, IconSize } from 'app/types';

export type IconProps = {
  name: IconName;
  color: Hue;
  size?: IconSize;
};
