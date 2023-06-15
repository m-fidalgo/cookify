import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const HeaderContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${SIZES.extraSmall};
  justify-content: space-between;
  padding: ${SIZES.extraLarge};
  width: 100%;
`;

export const IconContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${SIZES.small};
`;
