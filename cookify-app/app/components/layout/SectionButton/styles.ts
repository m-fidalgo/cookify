import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, Hue, PADDING } from 'app/constants';

export type StyleProps = {
  color: Hue;
};

export const SectionButtonContainer = styled.TouchableOpacity<StyleProps>`
  align-items: center;
  background-color: ${({ color }) => HUES[color]};
  border-radius: ${BORDER_RADIUS.small};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${PADDING.medium} ${PADDING.extraSmall} ${PADDING.medium} ${PADDING.medium};
  width: 80%;
`;
