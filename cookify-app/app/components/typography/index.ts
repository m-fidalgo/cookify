import styled from 'styled-components/native';

import { HUES, TYPOGRAPHY } from 'app/constants';

export const Title = styled.Text`
  font-family: ${TYPOGRAPHY.Bold};
  font-size: 24px;
  line-height: 32px;
  color: ${HUES.black};
`;

export const Subtitle = styled.Text`
  font-family: ${TYPOGRAPHY.Bold};
  font-size: 20px;
  line-height: 28px;
  color: ${HUES.black};
`;

export const Body = styled.Text`
  font-family: ${TYPOGRAPHY.Regular};
  font-size: 16px;
  line-height: 18px;
  color: ${HUES.black};
`;

export const Small = styled.Text`
  font-family: ${TYPOGRAPHY.Light};
  font-size: 14px;
  line-height: 16px;
  color: ${HUES.black};
`;
