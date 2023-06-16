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

type StyleProps = {
  spaced?: boolean;
};

export const IconContainer = styled.View<StyleProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ spaced = false }) => (spaced ? SIZES.large : SIZES.small)};
`;
