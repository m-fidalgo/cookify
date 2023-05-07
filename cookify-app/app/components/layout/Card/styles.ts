import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, PADDING } from 'app/constants/styles';

const DEFAULT_CARD_IMAGE_HEIGHT_IN_PX = 200;
const DEFAULT_CARD_WIDTH_IN_PX = 320;
const SMALL_CARD_WIDTH_IN_PX = 130;

export type StyleProps = {
  small?: boolean;
};

export const CardContainer = styled.TouchableOpacity<StyleProps>`
  background-color: ${HUES.white};
  border-color: ${HUES.lightGray};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1;
  box-sizing: border-box;
  width: ${({ small }) => (small ? SMALL_CARD_WIDTH_IN_PX : DEFAULT_CARD_WIDTH_IN_PX)}px;
`;

export const CardImage = styled.Image`
  border-top-right-radius: ${BORDER_RADIUS.small};
  border-top-left-radius: ${BORDER_RADIUS.small};
  height: ${DEFAULT_CARD_IMAGE_HEIGHT_IN_PX}px;
  width: 100%;
`;

export const CardTitleContainer = styled.View`
  width: 100%;
  padding: ${PADDING.medium};
`;
