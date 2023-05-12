import styled from 'styled-components/native';

import { SIZES, Z_INDEX } from 'app/constants';

export const RecipeImage = styled.Image`
  height: 280px;
  width: 100%;
`;

export const GoBackButtonContainer = styled.View`
  padding-top: ${SIZES.medium};
  padding-left: ${SIZES.small};
  position: absolute;
  left: 0;
  z-index: ${Z_INDEX.small};
`;

export const ContentView = styled.View`
  gap: ${SIZES.extraLarge};
  padding: ${SIZES.extraLarge};
`;

export const Header = styled.View`
  gap: ${SIZES.medium};
`;

export const TitleView = styled.View`
  flex-direction: row;
  gap: ${SIZES.extraLarge};
  justify-content: space-between;
`;

export const InfoView = styled.View`
  flex-direction: row;
  gap: ${SIZES.extraLarge};
`;

export const LikeButtonContainer = styled.View`
  padding-top: ${SIZES.extraSmall};
  float: right;
`;

export const ChipsSection = styled.View`
  flex-direction: row;
  gap: ${SIZES.small};
`;
