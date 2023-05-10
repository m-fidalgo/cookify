import { Small } from 'app/components/typography';

import { ChipContainer } from './styles';
import { ChipProps } from './types';

export const Chip: React.FC<ChipProps> = ({ color, text }) => {
  return (
    <ChipContainer color={color}>
      <Small color="white">{text}</Small>
    </ChipContainer>
  );
};
