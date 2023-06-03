import styled from 'styled-components/native';

import { HUES, Hue, TYPOGRAPHY, asItalic } from 'app/constants';

export type TypographyProps = {
  color?: Hue;
  italic?: boolean;
};

type BodyProps = {
  bold?: boolean;
};

export const Title = styled.Text<TypographyProps>`
  font-family: ${({ italic = false }) => (italic ? asItalic(TYPOGRAPHY.Bold) : TYPOGRAPHY.Bold)};
  font-size: 26px;
  line-height: 32px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Subtitle = styled.Text<TypographyProps>`
  font-family: ${({ italic = false }) => (italic ? asItalic(TYPOGRAPHY.Bold) : TYPOGRAPHY.Bold)};
  font-size: 22px;
  line-height: 28px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Body = styled.Text<TypographyProps & BodyProps>`
  font-family: ${({ italic = false, bold = false }) =>
    italic
      ? asItalic(bold ? TYPOGRAPHY.Regular : TYPOGRAPHY.Light)
      : bold
      ? TYPOGRAPHY.Regular
      : TYPOGRAPHY.Light};
  font-size: 18px;
  line-height: 20px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Small = styled.Text<TypographyProps>`
  font-family: ${({ italic = false }) => (italic ? asItalic(TYPOGRAPHY.Light) : TYPOGRAPHY.Light)};
  font-size: 16px;
  line-height: 18px;
  color: ${({ color = 'black' }) => HUES[color]};
`;

export const Error = styled(Small)<TypographyProps>`
  align-self: center;
`;
