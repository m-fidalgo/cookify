import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export type StyleProps = {
  heightInPx: number;
};

export const NoResultsContainer = styled.View<StyleProps>`
  align-items: center;
  justify-content: center;
  height: ${({ heightInPx }) => `${heightInPx}px`};
  width: 100%;
`;

export const IconContainer = styled.View`
  padding-bottom: ${SIZES.medium};
`;
