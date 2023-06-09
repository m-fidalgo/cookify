import { TouchableOpacity } from 'react-native-gesture-handler';

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
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
