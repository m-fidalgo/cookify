import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, SIZES } from 'app/constants';

export const OpacityLayover = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${HUES.opacityGray};
`;

export const ModalContent = styled.View`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${SIZES.medium};
  padding: ${SIZES.large};
  width: 300px;
  background-color: ${HUES.white};
  border: 1px solid ${HUES.lightGray};
  border-radius: ${BORDER_RADIUS.large};
`;
