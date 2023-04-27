import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES } from 'app/constants';

const IMAGE_UPLOADER_SIZE_IN_PX = 150;

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
