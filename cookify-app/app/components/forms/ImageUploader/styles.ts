import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, PADDING, Z_INDEX } from 'app/constants';

const IMAGE_UPLOADER_SIZE_IN_PX = 150;
const ICON_OFFSET_IN_PX = 5;

export const ImageUploaderContainer = styled.TouchableOpacity`
  align-items: center;
  border-color: ${HUES.lightGray};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1;
  justify-content: center;
  height: ${IMAGE_UPLOADER_SIZE_IN_PX}px;
  width: ${IMAGE_UPLOADER_SIZE_IN_PX}px;
`;

export const Image = styled.Image`
  border-radius: ${BORDER_RADIUS.small};
  height: ${IMAGE_UPLOADER_SIZE_IN_PX}px;
  width: ${IMAGE_UPLOADER_SIZE_IN_PX}px;
`;

export const IconContainer = styled.View`
  background-color: ${HUES.white};
  border-radius: ${BORDER_RADIUS.circle};
  padding: ${PADDING.extraSmall};
  position: absolute;
  right: ${ICON_OFFSET_IN_PX}px;
  top: ${ICON_OFFSET_IN_PX}px;
  z-index: ${Z_INDEX.medium};
`;
