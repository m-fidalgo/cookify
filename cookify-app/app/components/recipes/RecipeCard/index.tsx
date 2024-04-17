import { useRouter } from 'expo-router';
import * as React from 'react';
import { useSetRecoilState } from 'recoil';

import { Card } from 'app/components/layout';
import { currentRecipeState } from 'app/state/recipe';

import { RecipeCardProps } from './types';

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const router = useRouter();
  const imageUrl = recipe.images.length ? recipe.images[0].imageUrl : undefined;

  const onPress = () => {
    setCurrentRecipe(recipe);
    router.push('/recipe');
  };

  return <Card imageUrl={imageUrl} title={recipe.title} onPress={onPress} />;
};
