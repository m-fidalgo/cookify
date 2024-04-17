import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, SIZES, Z_INDEX } from 'app/constants';

const ICON_OFFSET_IN_PX = 5;

export type ImageUploaderStyleProps = {
  sizeInPx: number;
};

export const ImageUploaderContainer = styled.Pressable<ImageUploaderStyleProps>`
  align-items: center;
  border-color: ${HUES.lightGray};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1px;
  justify-content: center;
  height: ${({ sizeInPx = false }) => `${sizeInPx}px`};
  width: ${({ sizeInPx = false }) => `${sizeInPx}px`};
`;

export const Image = styled.Image<ImageUploaderStyleProps>`
  border-radius: ${BORDER_RADIUS.small};
  height: ${({ sizeInPx = false }) => `${sizeInPx}px`};
  width: ${({ sizeInPx = false }) => `${sizeInPx}px`};
`;

export const IconContainer = styled.View`
  background-color: ${HUES.white};
  border-radius: ${BORDER_RADIUS.circle};
  padding: ${SIZES.extraSmall};
  position: absolute;
  right: ${ICON_OFFSET_IN_PX}px;
  top: ${ICON_OFFSET_IN_PX}px;
  z-index: ${Z_INDEX.medium};
`;
