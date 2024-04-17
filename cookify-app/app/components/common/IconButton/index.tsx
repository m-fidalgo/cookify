import * as React from 'react';
import { Pressable } from 'react-native';

import { Icon } from '../Icon';
import { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  color,
  size,
  onPress,
  disabled = false,
}) => {
  return disabled ? (
    <Icon name={name} size={size} color={color} />
  ) : (
    <Pressable onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};
