import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SearchBarContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${SIZES.extraSmall};
  justify-content: space-between;
  padding: ${SIZES.extraLarge};
  padding-bottom: ${SIZES.extraSmall};
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 90%;
`;
