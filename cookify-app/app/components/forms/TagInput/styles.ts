import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.small};
`;

export const ChipsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${SIZES.extraSmall};
  padding-top: ${SIZES.extraSmall};
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
