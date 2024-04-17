import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, SIZES } from 'app/constants/styles';

const DEFAULT_CARD_IMAGE_HEIGHT_IN_PX = 200;
const SMALL_CARD_WIDTH_IN_PX = 320;

export type StyleProps = {
  small?: boolean;
};

export const CardContainer = styled.Pressable<StyleProps>`
  background-color: ${HUES.white};
  border-color: ${HUES.lightGray};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1px;
  box-sizing: border-box;
  width: ${({ small }) => (small ? `${SMALL_CARD_WIDTH_IN_PX}px` : '100%')};
`;

export const CardImage = styled.Image`
  border-top-right-radius: ${BORDER_RADIUS.small};
  border-top-left-radius: ${BORDER_RADIUS.small};
  height: ${DEFAULT_CARD_IMAGE_HEIGHT_IN_PX}px;
  width: 100%;
`;

export const CardTitleContainer = styled.View`
  padding: ${SIZES.medium};
  width: 100%;
`;
