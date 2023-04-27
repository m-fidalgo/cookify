import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';

import { HUES } from 'app/constants';

import { IconProps } from './types';

export * from './types';

export const Icon: React.FC<IconProps> = ({ name, color, size = 'regular' }) => {
  return <MaterialIcons name={name} size={size === 'regular' ? 24 : 16} color={HUES[color]} />;
};
