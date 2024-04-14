import * as React from 'react';

import { Body, Subtitle } from 'app/components/typography';
import { Ingredient } from 'app/types';

import { IngredientView, IngredientsView, SectionView } from './styles';
import { IngredientsSectionProps } from './types';

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({ ingredients }) => {
  return (
    <SectionView>
      <Subtitle>Ingredientes</Subtitle>
      <IngredientsView>
        {ingredients.map((ingredient: Ingredient) => (
          <IngredientView key={ingredient.id}>
            <Body color="aqua">•</Body>
            <Body>{ingredient.text}</Body>
          </IngredientView>
        ))}
      </IngredientsView>
    </SectionView>
  );
};
