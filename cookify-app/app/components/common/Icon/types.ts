import { MaterialIcons } from '@expo/vector-icons';

import { Hue } from 'app/constants';

export type IconSize = 'small' | 'regular';

export type IconProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  color: Hue;
  size?: IconSize;
};
