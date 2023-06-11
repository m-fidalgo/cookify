import { BottomSheetView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const Container = styled(BottomSheetView)`
  padding: ${SIZES.large};
`;

export const Item = styled.View`
  padding: ${SIZES.medium} 0;
  gap: ${SIZES.extraSmall};
`;

export const InlineView = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InlineItem = styled(Item)`
  width: 48%;
`;

export const CheckboxContainer = styled.View`
  padding: ${SIZES.medium} 0;
  gap: ${SIZES.medium};
`;
