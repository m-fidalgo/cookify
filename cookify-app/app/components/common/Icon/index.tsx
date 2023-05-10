import { MaterialIcons } from '@expo/vector-icons';

import { HUES } from 'app/constants';

import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ name, color, size = 'medium' }) => {
  return (
    <MaterialIcons
      name={name}
      size={size === 'small' ? 16 : size === 'medium' ? 24 : 32}
      color={HUES[color]}
    />
  );
};
