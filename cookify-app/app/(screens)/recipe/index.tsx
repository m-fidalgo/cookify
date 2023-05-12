import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { currentRecipeState } from 'app/state/recipe';

import { RecipeScreenSkeleton } from './skeleton';

const RecipeScreen: React.FC = () => {
  const currentRecipe = useRecoilValue(currentRecipeState);

  if (!currentRecipe) return <RecipeScreenSkeleton />;

  return <View style={{ flex: 1 }}></View>;
};

export default RecipeScreen;
