import styled from 'styled-components/native';

import { PADDING, Padding } from 'app/constants';

type StyleProps = {
  size?: Padding;
};

export const Divider = styled.View<StyleProps>`
  height: ${({ size = 'small' }) => PADDING[size]};
`;
