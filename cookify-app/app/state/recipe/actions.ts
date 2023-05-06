import { useSetResults } from 'app/hooks';
import { SearchRecipesResponse } from 'app/services/recipes/searchRecipes/types';
import { Recipe } from 'app/types';

import { recipeIdsListState, recipePaginationState, recipeStateF } from '.';

export const useSetRecipes = () => {
  const setResults = useSetResults<Recipe>({
    paginationState: recipePaginationState,
    idsState: recipeIdsListState,
    objectState: recipeStateF,
  });

  return (response: SearchRecipesResponse) => {
    setResults(response);
  };
};
