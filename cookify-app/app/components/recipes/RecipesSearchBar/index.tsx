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

  const setFilter = (filter?: string) => {
    setFilterParams({ ...filterParams, filter });
    resetPage();
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <TextInput
          placeholder="Buscar..."
          leadingIcon="search"
          value={filterParams?.filter}
          onChange={setFilter}
        />
      </InputContainer>
      <IconButton color="gray" name="tune" onPress={onClickFilter} />
    </SearchBarContainer>
  );
};
