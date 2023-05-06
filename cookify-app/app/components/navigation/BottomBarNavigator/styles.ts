import styled from 'styled-components/native';

import { HUES, PADDING } from 'app/constants';

export const BottomBar = styled.View`
  align-items: center;
  background-color: ${HUES.white};
  border-color: ${HUES.lightGray};
  border-top-width: 1;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${PADDING.large} 0;
  position: absolute;
  width: 100%;
`;