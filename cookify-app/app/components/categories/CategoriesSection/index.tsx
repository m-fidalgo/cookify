import * as React from 'react';

import { Chip } from 'app/components/common';
import { Subtitle } from 'app/components/typography';
import { Category } from 'app/types';

import { ChipsSection, SectionView } from './styles';
import { CategoriesSectionProps } from './types';

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  return (
    <SectionView>
      <Subtitle>Categorias</Subtitle>
      <ChipsSection>
        {categories.map((category: Category) => (
          <Chip key={category.id} text={category.name} />
        ))}
      </ChipsSection>
    </SectionView>
  );
};
