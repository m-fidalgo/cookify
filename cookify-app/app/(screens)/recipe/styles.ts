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
  gap: ${SIZES.large};
  padding: ${SIZES.extraLarge};
`;

export const Header = styled.View`
  gap: ${SIZES.medium};
`;

export const TitleView = styled.View`
  flex-direction: row;
  gap: ${SIZES.extraLarge};
  justify-content: space-between;
  align-items: center;
`;

export const RatingsView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const InfoView = styled.View`
  flex-direction: row;
  gap: ${SIZES.extraLarge};
  justify-content: space-between;
`;

export const LikeButtonContainer = styled.View`
  padding-top: ${SIZES.extraSmall};
  float: right;
`;
