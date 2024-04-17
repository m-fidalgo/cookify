import styled from 'styled-components/native';

import { HUES, SIZES } from 'app/constants';

export const BottomBar = styled.View`
  align-items: center;
  background-color: ${HUES.white};
  border-color: ${HUES.lightGray};
  border-top-width: 1px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${SIZES.large} 0;
  position: fixed;
  width: 100%;
`;
