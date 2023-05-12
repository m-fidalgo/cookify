import { useRouter } from 'expo-router';
import { useSetRecoilState } from 'recoil';

import { Divider, RecipesPreviewSection } from 'app/components';
import { getRecipe } from 'app/services';
import { currentRecipeState } from 'app/state/recipe';

import { sections } from './config';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id);
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = () => {
    router.push('/search');
  };

  return (
    <>
      <Divider size="extraLarge" />
      {sections.map(({ title, params }) => {
        return (
          <RecipesPreviewSection
            title={title}
            params={params}
            onPressItem={setRecipe}
            onPressSeeMore={handlePressSeeMore}
          />
        );
      })}
    </>
  );
};

export default HomeScreen;
