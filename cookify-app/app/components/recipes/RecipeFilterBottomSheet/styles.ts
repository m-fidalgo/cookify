import { BottomSheetView } from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const Container = styled(BottomSheetView)`
  padding: ${SIZES.large};
  gap: ${SIZES.small};
`;

export const InlineView = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SIZES.extraLarge};
`;
