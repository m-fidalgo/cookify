import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

import { NoResults } from 'app/components/layout';
import { HUES, SIZES } from 'app/constants';
import { searchRecipes } from 'app/services';
import { recipeFiltersState, recipePageState } from 'app/state/recipe';
import { Recipe } from 'app/types';

import { RecipeCard } from '../RecipeCard';

export const RecipeList: React.FC = () => {
  const filters = useRecoilValue(recipeFiltersState);
  const [page, setPage] = useRecoilState(recipePageState);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [hasMore, setHasMore] = React.useState<boolean>(false);
  const [firstLoading, setFirstLoading] = React.useState<boolean>(true);

  const addRecipes = (newRecipes: Recipe[]) => {
    setRecipes((prev) => [...prev, ...newRecipes]);
  };

  const fetchRecipes = React.useCallback(
    async (page: number) => {
      setLoading(true);
      const response = await searchRecipes({ pageSize: 3, page, ...filters });
      if (response) {
        addRecipes(response.results);
        setHasMore(!!response.next);
      }
      setLoading(false);
    },
    [filters]
  );

  const loadMore = async () => {
    if (hasMore) setPage(page + 1);
  };

  const reset = () => {
    setLoading(true);
    setRecipes([]);
    setPage(1);
    fetchRecipes(1);
  };

  React.useEffect(() => {
    fetchRecipes(page);
  }, [page]);

  React.useEffect(() => {
    if (!firstLoading) reset();
  }, [filters]);

  React.useEffect(() => {
    setFirstLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={HUES.yellow} />
      ) : !recipes.length ? (
        <NoResults heightInPx={100} message="Nenhuma receita com esses filtros" />
      ) : (
        <FlatList
          data={recipes}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.8}
          contentContainerStyle={{
            width: '100%',
            minHeight: '100%',
            padding: 24,
            gap: 24,
          }}
        />
      )}
    </>
  );
};
