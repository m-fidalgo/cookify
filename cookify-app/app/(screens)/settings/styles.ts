import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SettingsContainer = styled(SafeAreaView)`
  padding: ${SIZES.large};
  flex: 1;
`;

export const IconContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const FormContainer = styled.View`
  margin: auto 0;
`;
