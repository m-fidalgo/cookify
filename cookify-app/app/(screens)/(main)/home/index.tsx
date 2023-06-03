import { useRouter } from 'expo-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Divider, RecipesPreviewSection } from 'app/components';
import { getRecipe } from 'app/services';
import { currentRecipeState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';

import { sections } from './config';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id, currentUser ? { userId: currentUser.id } : undefined);
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = () => {
    router.push('/search');
  };

  return (
    <>
      <Divider size="extraLarge" />
      {sections.map(({ title, params }, index) => {
        return (
          <RecipesPreviewSection
            key={index}
            title={title}
            params={currentUser ? { ...params, userId: currentUser.id } : params}
            onPressItem={setRecipe}
            onPressSeeMore={handlePressSeeMore}
          />
        );
      })}
    </>
  );
};

export default HomeScreen;
