import styled from 'styled-components/native';

import { BORDER_RADIUS, HUES, PADDING } from 'app/constants';

const INPUT_MIN_WIDTH_IN_PX = 100;

type StyleProps = {
  focused?: boolean;
};

export const TextInputContainer = styled.View<StyleProps>`
  align-items: center;
  border-color: ${({ focused = false }) => (focused ? HUES.lightBlue : HUES.lightGray)};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1;
  display: flex;
  flex-direction: row;
  padding: ${PADDING.small};
`;

export const StyledTextInput = styled.TextInput`
  color: ${HUES.black};
  font-size: 16px;
  min-width: ${INPUT_MIN_WIDTH_IN_PX}px;
  padding: 0;
`;
