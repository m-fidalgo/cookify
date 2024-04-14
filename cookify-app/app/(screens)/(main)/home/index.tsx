import { useRouter } from 'expo-router';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Divider, RecipesPreviewSection } from 'app/components';
import { RecipeFilterParams, getRecipe } from 'app/services';
import { currentRecipeState, recipeFiltersState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';

import { sections } from './config';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const setFilterParams = useSetRecoilState(recipeFiltersState);

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id, currentUser ? { userId: currentUser.id } : undefined);
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = (params: RecipeFilterParams) => {
    setFilterParams(currentUser ? { ...params, userId: currentUser.id } : params);
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
            params={
              currentUser
                ? { ...params, userId: currentUser.id, pageSize: 5 }
                : { ...params, pageSize: 5 }
            }
            onPressItem={setRecipe}
            onPressSeeMore={() => handlePressSeeMore(params)}
          />
        );
      })}
    </>
  );
};

export default HomeScreen;
