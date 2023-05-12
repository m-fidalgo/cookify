import styled from 'styled-components/native';

import { SIZES } from 'app/constants';

export const SectionView = styled.View`
  width: 100%;
  gap: ${SIZES.large};
`;

export const IngredientsView = styled.View`
  padding-left: ${SIZES.small};
  gap: ${SIZES.small};
`;

export const IngredientView = styled.View`
  flex-direction: row;
  gap: ${SIZES.extraSmall};
`;
