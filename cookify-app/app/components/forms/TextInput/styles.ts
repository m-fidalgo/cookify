import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, SIZES } from 'app/constants';

const INPUT_MIN_WIDTH_IN_PX = 100;

type StyleProps = {
  focused?: boolean;
};

export const TextInputContainer = styled.View<StyleProps>`
  align-items: center;
  background-color: ${HUES.trueWhite};
  border-color: ${({ focused = false }) => (focused ? HUES.lightBlue : HUES.lightGray)};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-width: ${INPUT_MIN_WIDTH_IN_PX}px;
  padding: ${SIZES.small};
`;

export const StyledTextInput = styled.TextInput`
  color: ${HUES.black};
  font-size: 16px;
  width: 85%;
  padding: 0;
`;
