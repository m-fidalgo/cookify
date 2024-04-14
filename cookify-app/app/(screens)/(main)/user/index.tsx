import { useRouter } from 'expo-router';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { RecipesPreviewSection, UserHeader } from 'app/components';
import { RecipeFilterParams, getRecipe } from 'app/services';
import { currentRecipeState, recipeFiltersState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';

const UserScreen: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const setFilterParams = useSetRecoilState(recipeFiltersState);

  React.useEffect(() => {
    if (!currentUser) router.push('/');
  }, [currentUser]);

  if (!currentUser) return null;

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id, { userId: currentUser.id });
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = (params: RecipeFilterParams) => {
    setFilterParams({ ...params, userId: currentUser.id });
    router.push('/search');
  };

  const defaultParams = {
    userId: currentUser.id,
    page: 1,
    pageSize: 5,
  };

  return (
    <>
      <UserHeader />
      <RecipesPreviewSection
        title="Minhas Receitas"
        params={{
          ...defaultParams,
          creatorId: currentUser.id,
        }}
        onPressItem={setRecipe}
        onPressSeeMore={() => handlePressSeeMore({ creatorId: currentUser.id })}
      />
      <RecipesPreviewSection
        title="Receitas Curtidas"
        params={{
          ...defaultParams,
          liked: true,
        }}
        onPressItem={setRecipe}
        onPressSeeMore={() => handlePressSeeMore({ liked: true })}
      />
    </>
  );
};

export default UserScreen;
