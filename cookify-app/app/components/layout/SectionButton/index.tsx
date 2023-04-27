import * as React from 'react';

import { Body, Icon } from 'app/components';

import { SectionButtonContainer } from './styles';
import { SectionButtonProps } from './types';

export const SectionButton: React.FC<SectionButtonProps> = ({ color, title, onPress }) => {
  return (
    <SectionButtonContainer color={color} onPress={onPress}>
      <Body color="white">{title}</Body>
      <Icon name="chevron-right" color="white" />
    </SectionButtonContainer>
  );
};
