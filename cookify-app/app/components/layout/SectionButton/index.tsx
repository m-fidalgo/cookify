import * as React from 'react';

import { Icon } from 'app/components/common';
import { Subtitle } from 'app/components/typography';

import { SectionButtonContainer } from './styles';
import { SectionButtonProps } from './types';

export const SectionButton: React.FC<SectionButtonProps> = ({ color, title, onPress }) => {
  return (
    <SectionButtonContainer color={color} onPress={onPress}>
      <Subtitle color="white">{title}</Subtitle>
      <Icon name="chevron-right" color="white" />
    </SectionButtonContainer>
  );
};
