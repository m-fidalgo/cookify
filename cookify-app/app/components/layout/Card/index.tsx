import * as React from 'react';

import { Subtitle } from 'app/components/typography';
import { DEFAULT_SHADOW_STYLES } from 'app/constants';

import { CardContainer, CardImage, CardTitleContainer } from './styles';
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ imageUrl, title, small = false, onPress }) => {
  return (
    <CardContainer small={small} onPress={onPress} style={DEFAULT_SHADOW_STYLES}>
      <CardImage source={imageUrl ? { uri: imageUrl } : require('assets/images/no-image.png')} />
      <CardTitleContainer>
        <Subtitle numberOfLines={1}>{title}</Subtitle>
      </CardTitleContainer>
    </CardContainer>
  );
};
