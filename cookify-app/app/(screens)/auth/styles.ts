import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { HUES } from 'app/constants';

export const RoundView = styled.View`
  background-color: ${HUES.yellow};
  border-bottom-right-radius: 200%;
  border-bottom-left-radius: 200%;
  height: 70%;
  position: sticky;
`;

export const AuthContentView = styled(SafeAreaView)`
  align-items: center;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
