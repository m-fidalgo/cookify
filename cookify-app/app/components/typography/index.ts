import styled from 'styled-components/native';

import { HUES, Hue, TYPOGRAPHY } from 'app/constants';

export type TypographyProps = {
  color?: Hue;
};

export const Title = styled.Text<TypographyProps>`
  font-family: ${TYPOGRAPHY.Bold};
  font-size: 24px;
  line-height: 32px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Subtitle = styled.Text<TypographyProps>`
  font-family: ${TYPOGRAPHY.Bold};
  font-size: 20px;
  line-height: 28px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Body = styled.Text<TypographyProps>`
  font-family: ${TYPOGRAPHY.Regular};
  font-size: 16px;
  line-height: 18px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Small = styled.Text<TypographyProps>`
  font-family: ${TYPOGRAPHY.Light};
  font-size: 14px;
  line-height: 16px;
  color: ${({ color = 'black' }) => HUES[color]};
`;
