import { useRouter } from 'expo-router';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { MenuSection, RecipesPreviewSection, UserHeader } from 'app/components';
import { RecipeFilterParams, getRecipe } from 'app/services';
import { currentRecipeState, recipeFiltersState } from 'app/state/recipe';
import { currentUserState, menuFetchState, recommendedRecipesFetchState } from 'app/state/user';

const UserScreen: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const setFilterParams = useSetRecoilState(recipeFiltersState);
  const recommendedRecipes = useRecoilValue(recommendedRecipesFetchState);
  const menu = useRecoilValue(menuFetchState);

  React.useEffect(() => {
    if (!currentUser) router.push('/');
  }, [currentUser]);

  if (!currentUser) return null;

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id);
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = (params: RecipeFilterParams) => {
    setFilterParams(params);
    router.push('/search');
  };

  const defaultParams = {
    limit: 5,
    offset: 0,
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
      <RecipesPreviewSection
        title="Receitas Recomendadas"
        recipes={recommendedRecipes}
        onPressItem={setRecipe}
        onPressSeeMore={() => handlePressSeeMore({})}
      />
      {Boolean(menu.length) && <MenuSection menu={menu} onPressItem={setRecipe} />}
    </>
  );
};

export default UserScreen;
