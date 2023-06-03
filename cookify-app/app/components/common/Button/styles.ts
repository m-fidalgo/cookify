import styled, { css } from 'styled-components/native';

import { BORDER_RADIUS, HUES, Hue, SIZES } from 'app/constants';

export type StyleProps = {
  color: Hue;
  variant: 'text' | 'solid';
};

export const ButtonContainer = styled.TouchableOpacity<StyleProps>`
  align-items: center;
  background-color: ${({ color, variant }) => (variant === 'solid' ? HUES[color] : HUES.white)};
  border-radius: ${BORDER_RADIUS.small};
  padding: ${SIZES.small} ${SIZES.medium};
`;
