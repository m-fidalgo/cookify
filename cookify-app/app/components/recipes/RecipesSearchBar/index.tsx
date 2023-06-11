import React from 'react';
import { useRecoilState } from 'recoil';

import { IconButton } from 'app/components/common';
import { TextInput } from 'app/components/forms';
import { recipeFiltersState } from 'app/state/recipe';

import { InputContainer, SearchBarContainer } from './styles';
import { RecipesSearchBarProps } from './types';

export const RecipesSearchBar: React.FC<RecipesSearchBarProps> = ({ onClickFilter }) => {
  const [filterParams, setFilterParams] = useRecoilState(recipeFiltersState);

  const setFilter = (filter?: string) => {
    setFilterParams({ ...filterParams, filter });
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
