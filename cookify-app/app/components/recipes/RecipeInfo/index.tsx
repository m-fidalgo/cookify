import * as React from 'react';

import { Icon } from 'app/components/common';
import { Small } from 'app/components/typography';

import { RecipeInfoView } from './styles';
import { RecipeInfoProps } from './types';

export const RecipeInfo: React.FC<RecipeInfoProps> = ({ iconName, text }) => {
  return (
    <RecipeInfoView>
      <Icon size="small" name={iconName} color="aqua" />
      <Small>{text}</Small>
    </RecipeInfoView>
  );
};
