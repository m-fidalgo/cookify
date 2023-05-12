import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { BORDER_RADIUS, DEFAULT_SHADOW_STYLES, HUES, SIZES } from 'app/constants';

const SELECT_DROPDOWN_MAX_HEIGHT_IN_PX = 300;
const SELECT_INPUT_MIN_WIDTH_IN_PX = 200;

type StyleProps = {
  focused?: boolean;
};

export const selectStyles = StyleSheet.create({
  input: {
    minWidth: SELECT_INPUT_MIN_WIDTH_IN_PX,
  },
  placeholder: { color: HUES.gray, fontSize: 16 },
  container: {
    borderColor: HUES.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    maxHeight: SELECT_DROPDOWN_MAX_HEIGHT_IN_PX,
    ...DEFAULT_SHADOW_STYLES,
  },
});

export const SelectContainer = styled.View<StyleProps>`
  background-color: ${HUES.trueWhite};
  border-color: ${({ focused = false }) => (focused ? HUES.lightBlue : HUES.lightGray)};
  border-radius: ${BORDER_RADIUS.small};
  border-width: 1;
  padding: 0 ${SIZES.small};
`;

export const InputContainer = styled.View`
  padding: ${SIZES.small};
`;

export const ItemContainer = styled.View`
  padding: ${SIZES.medium};
`;
