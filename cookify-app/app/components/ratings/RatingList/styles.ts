import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, SIZES } from 'app/constants';

export const ListWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.large};
  width: 100%;
`;

export const RatingWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.small};
  border-radius: ${BORDER_RADIUS.small};
  border: 1px solid ${HUES.lightGray};
  padding: ${SIZES.medium};
`;

export const RatingHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
