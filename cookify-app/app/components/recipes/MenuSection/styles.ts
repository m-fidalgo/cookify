import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SectionContainer = styled.View`
  padding: ${SIZES.medium} 0;
`;

export const TitleContainer = styled.View`
  padding: ${SIZES.extraLarge};
  padding-top: 0;
`;

export const CardContainer = styled.View`
  flex-direction: column;
  gap: ${SIZES.medium};
  padding: ${SIZES.medium} ${SIZES.extraLarge};
`;
