import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SectionView = styled.View`
  gap: ${SIZES.large};
`;

export const StepsView = styled.View`
  padding-left: ${SIZES.small};
  padding-right: ${SIZES.extraLarge};
  gap: ${SIZES.small};
`;

export const StepView = styled.View`
  flex-direction: row;
  gap: ${SIZES.medium};
`;

export const StepNumberContainer = styled.View`
  align-items: flex-end;
  width: ${SIZES.extraLarge};
`;
