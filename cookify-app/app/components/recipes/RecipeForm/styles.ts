import styled from 'styled-components/native';

import { Button } from 'app/components/common';
import { SIZES } from 'app/constants';

export const FormItem = styled.View`
  padding: ${SIZES.medium} 0;
  gap: ${SIZES.extraSmall};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RowItem = styled(FormItem)`
  width: 48%;
`;

export const RemovableFieldContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${SIZES.small};
  padding: ${SIZES.small} 0;
  width: 100%;
`;

export const RemovableField = styled.View`
  width: 90%;
`;

export const AddFieldButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${SIZES.medium};
`;

export const AddFieldButton = styled(Button)`
  width: 100px;
`;
