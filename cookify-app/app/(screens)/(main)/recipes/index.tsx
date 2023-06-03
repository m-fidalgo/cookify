import { Divider } from 'app/components';
import { RecipeForm } from 'app/components/recipes/RecipeForm';

import { Container } from './styles';

const RecipesScreen: React.FC = () => {
  return (
    <Container>
      <Divider size="large" />
      <RecipeForm />
    </Container>
  );
};

export default RecipesScreen;
