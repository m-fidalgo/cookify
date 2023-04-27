import styled, { css } from 'styled-components/native';

import { BORDER_RADIUS, HUES, Hue, PADDING } from 'app/constants';

export type StyleProps = {
  color: Hue;
  variant: 'text' | 'solid';
};

export const ButtonContainer = styled.TouchableOpacity<StyleProps>`
  background-color: ${({ color, variant }) => (variant === 'solid' ? HUES[color] : HUES.white)};
  border-radius: ${BORDER_RADIUS.small};
  padding: ${PADDING.small} ${PADDING.medium};
`;
