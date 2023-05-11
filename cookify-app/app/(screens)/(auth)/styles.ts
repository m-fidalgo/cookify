import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { HUES, PADDING, Z_INDEX } from 'app/constants';

export const RoundView = styled.View`
  background-color: ${HUES.yellow};
  border-bottom-right-radius: 200%;
  border-bottom-left-radius: 200%;
  height: 75%;
  position: sticky;
`;

export const AuthContentView = styled(SafeAreaView)`
  align-items: center;
  height: 100%;
  justify-content: space-around;
  padding: 80px 0 ${PADDING.extraLarge} 0;
  position: absolute;
  width: 100%;
`;

export const GoBackButtonContainer = styled(SafeAreaView)`
  padding: ${PADDING.large};
  position: absolute;
  right: 0;
  z-index: ${Z_INDEX.small};
`;

export const Logo = styled.Image`
  resize-mode: contain;
  width: 100px;
  height: 100px;
`;

export const InputsContainer = styled.View`
  gap: ${PADDING.extraLarge};
  width: 70%;
`;

export const ActionsContainer = styled.View`
  align-items: center;
`;
