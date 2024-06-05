import * as React from 'react';

import { Small } from 'app/components/typography';

import { IconButton } from '../IconButton';
import { ChipContainer } from './styles';
import { ChipProps } from './types';

export const Chip: React.FC<ChipProps> = ({ color, text, onRemove }) => {
  return (
    <ChipContainer color={color}>
      <Small color="white">{text}</Small>
      {onRemove && <IconButton color="white" name="close" size="small" onPress={onRemove} />}
    </ChipContainer>
  );
};
