import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const FormItem = styled.View`
  padding: ${SIZES.medium} 0;
  gap: ${SIZES.extraSmall};
`;

export const CheckboxItem = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${SIZES.medium} 0;
  gap: ${SIZES.small};
`;
