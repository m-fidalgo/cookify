import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { IconButton } from 'app/components/common';
import { TextInput } from 'app/components/forms';
import { recipeFiltersState, recipePageState } from 'app/state/recipe';

import { InputContainer, SearchBarContainer } from './styles';
import { RecipesSearchBarProps } from './types';

export const RecipesSearchBar: React.FC<RecipesSearchBarProps> = ({ onClickFilter }) => {
  const resetPage = useResetRecoilState(recipePageState);
  const [filterParams, setFilterParams] = useRecoilState(recipeFiltersState);
  const [value, setValue] = React.useState(filterParams?.filter);

  const setFilter = (filter?: string) => {
    setFilterParams({ ...filterParams, filter });
    resetPage();
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
