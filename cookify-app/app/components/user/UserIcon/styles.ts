import styled from 'styled-components/native';

import { HUES } from 'app/constants';

export const RoundView = styled.View`
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: ${HUES.lightBlue};
  border-radius: 50%;
`;
