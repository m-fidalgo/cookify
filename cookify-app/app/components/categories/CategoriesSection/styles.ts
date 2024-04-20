import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SectionView = styled.View`
  width: 100%;
  gap: ${SIZES.large};
`;

export const ChipsSection = styled.View`
  flex-direction: row;
  gap: ${SIZES.small};
  flex-wrap: wrap;
`;
