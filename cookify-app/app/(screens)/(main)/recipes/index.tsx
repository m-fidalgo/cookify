import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import { Divider, RecipeForm } from 'app/components';
import { getRecipe } from 'app/services';
import { Recipe } from 'app/types';

import { RecipesScreenSkeleton } from './skeleton';
import { Container } from './styles';

const RecipesScreen: React.FC = () => {
  const [recipe, setRecipe] = React.useState<Recipe | undefined>();
  const { id } = useLocalSearchParams();

  const fetchRecipe = async () => {
    const recipe = await getRecipe(Number(id));
    setRecipe(recipe);
  };

  React.useEffect(() => {
    if (id) fetchRecipe();
  }, [id]);

  if (id && !recipe) return <RecipesScreenSkeleton />;

  return (
    <Container>
      <Divider size="large" />
      <RecipeForm recipe={recipe} />
    </Container>
  );
};

export default RecipesScreen;
