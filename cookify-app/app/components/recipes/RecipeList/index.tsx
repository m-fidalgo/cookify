import * as React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

import { NoResults } from 'app/components/layout';
import { HUES } from 'app/constants';
import { searchRecipes } from 'app/services';
import { recipeFiltersChangedState, recipeFiltersState, recipeOffsetState } from 'app/state/recipe';
import { Recipe } from 'app/types';

import { RecipeCard } from '../RecipeCard';

const LIMIT = 5;

export const RecipeList: React.FC = () => {
  const filters = useRecoilValue(recipeFiltersState);
  const [filtersChanged, setFiltersChanged] = useRecoilState(recipeFiltersChangedState);
  const [offset, setOffset] = useRecoilState(recipeOffsetState);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [hasMore, setHasMore] = React.useState<boolean>(false);

  const addRecipes = (newRecipes: Recipe[]) => {
    setRecipes((prev) => [...prev, ...newRecipes]);
  };

  const fetchRecipes = React.useCallback(
    async (offset: number) => {
      setLoading(true);
      const response = await searchRecipes({ ...filters, offset, limit: LIMIT });

      if (response) {
        addRecipes(response.results);
        setHasMore(response.total > LIMIT + offset);
      }
      setLoading(false);
    },
    [filters]
  );

  const loadMore = async () => {
    if (hasMore) setOffset(offset + LIMIT);
  };

  const reset = () => {
    setLoading(true);
    setFiltersChanged(false);
    setRecipes([]);
    setOffset(0);
    fetchRecipes(0);
  };

  React.useEffect(() => {
    fetchRecipes(offset);
  }, [offset]);

  React.useEffect(() => {
    if (filtersChanged) reset();
  }, [filtersChanged]);

  return (
    <>
      {!recipes.length ? (
        <>
          {loading ? (
            <ActivityIndicator size="large" color={HUES.yellow} />
          ) : (
            <NoResults heightInPx={100} message="Nenhuma receita encontrada" />
          )}
        </>
      ) : (
        <FlatList
          data={recipes}
          renderItem={({ item }) => <RecipeCard recipe={item} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.8}
          ListFooterComponent={
            loading ? <ActivityIndicator size="small" color={HUES.yellow} /> : undefined
          }
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
