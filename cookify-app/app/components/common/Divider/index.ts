import styled from 'styled-components/native';

import { SIZES, Size } from 'app/constants';

type StyleProps = {
  size?: Size;
};

export const Divider = styled.View<StyleProps>`
  height: ${({ size = 'small' }) => SIZES[size]};
`;
