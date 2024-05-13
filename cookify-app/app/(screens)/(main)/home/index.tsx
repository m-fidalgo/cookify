import { useRouter } from 'expo-router';
import * as React from 'react';
import { useSetRecoilState } from 'recoil';

import { Divider, RecipesPreviewSection } from 'app/components';
import { RecipeFilterParams, getRecipe } from 'app/services';
import { currentRecipeState, recipeFiltersState } from 'app/state/recipe';

import { sections } from './config';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const setFilterParams = useSetRecoilState(recipeFiltersState);

  const setRecipe = async (id: number) => {
    router.push('/recipe');
    const recipe = await getRecipe(id);
    if (recipe) setCurrentRecipe(recipe);
  };

  const handlePressSeeMore = (params: RecipeFilterParams) => {
    setFilterParams(params);
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
            params={{ ...params, limit: 5, offset: 0 }}
            onPressItem={setRecipe}
            onPressSeeMore={() => handlePressSeeMore(params)}
          />
        );
      })}
    </>
  );
};

export default HomeScreen;
