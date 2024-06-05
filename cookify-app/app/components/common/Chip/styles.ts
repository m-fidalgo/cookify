import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, Hue, SIZES } from 'app/constants';

export type StyleProps = {
  color?: Hue;
};

export const ChipContainer = styled.View<StyleProps>`
  display: flex;
  flex-direction: row;
  gap: ${SIZES.small};
  background-color: ${({ color = 'lightBlue' }) => HUES[color]};
  border-radius: ${BORDER_RADIUS.large};
  padding: ${SIZES.small};
`;
