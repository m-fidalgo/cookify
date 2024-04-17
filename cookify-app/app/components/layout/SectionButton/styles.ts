import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, Hue, SIZES } from 'app/constants';

export type StyleProps = {
  color: Hue;
};

export const SectionButtonContainer = styled.Pressable<StyleProps>`
  align-items: center;
  background-color: ${({ color }) => HUES[color]};
  border-radius: ${BORDER_RADIUS.small};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${SIZES.medium} ${SIZES.extraSmall} ${SIZES.medium} ${SIZES.medium};
  width: 100%;
`;
