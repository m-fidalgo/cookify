import * as React from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

import { IconButton } from 'app/components/common';
import { TextInput } from 'app/components/forms';
import { recipeFiltersChangedState, recipeFiltersState, recipeOffsetState } from 'app/state/recipe';

import { InputContainer, SearchBarContainer } from './styles';
import { RecipesSearchBarProps } from './types';

export const RecipesSearchBar: React.FC<RecipesSearchBarProps> = ({ onClickFilter }) => {
  const resetOffset = useResetRecoilState(recipeOffsetState);
  const setFilterChanged = useSetRecoilState(recipeFiltersChangedState);
  const [filterParams, setFilterParams] = useRecoilState(recipeFiltersState);
  const [value, setValue] = React.useState(filterParams?.filter);

  const setFilter = (filter?: string) => {
    setFilterParams({ ...filterParams, filter });
    setFilterChanged(true);
    resetOffset();
  };

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (filterParams?.filter !== value) setFilter(value);
    }, 1000);
    return () => clearTimeout(handler);
  }, [value]);

  return (
    <SearchBarContainer>
      <InputContainer>
        <TextInput placeholder="Buscar..." leadingIcon="search" value={value} onChange={setValue} />
      </InputContainer>
      <IconButton color="gray" name="tune" onPress={onClickFilter} />
    </SearchBarContainer>
  );
};
