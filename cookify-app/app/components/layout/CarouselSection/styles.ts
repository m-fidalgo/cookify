import styled from 'styled-components/native';

import { PADDING } from 'app/constants';

export const SectionContainer = styled.View`
  padding: ${PADDING.medium} 0;
`;

export const TitleContainer = styled.View`
  padding: ${PADDING.extraLarge};
  padding-top: 0;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  padding: 0 ${PADDING.extraLarge};
`;

export const SeeMoreButton = styled.TouchableOpacity`
  align-items: center;
  height: 100%;
  justify-content: center;
  padding-left: ${PADDING.large};
`;
