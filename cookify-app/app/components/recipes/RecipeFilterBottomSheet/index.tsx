import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React from 'react';
import OutsidePressHandler from 'react-native-outside-press';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Button } from 'app/components/common';
import { CheckboxWithLabel, Select } from 'app/components/forms';
import { Body, Subtitle } from 'app/components/typography';
import { DEFAULT_SHADOW_STYLES, HUES } from 'app/constants';
import { getCategories } from 'app/services';
import { recipeFiltersState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';
import { SelectItem } from 'app/types';

import { Container, InlineView } from './styles';
import { RecipeFilterBottomSheetProps } from './types';

export const RecipeFilterBottomSheet: React.FC<RecipeFilterBottomSheetProps> = ({
  bottomSheetRef,
  close,
}) => {
  const currentUser = useRecoilValue(currentUserState);
  const [filterParams, setFilterParams] = useRecoilState(recipeFiltersState);
  const [categoryOptions, setCategoryOptions] = React.useState<SelectItem[]>([]);
  const snapPoints = React.useMemo(() => ['25%', '80%'], []);

  const getCategoryOptions = async () => {
    const response = await getCategories();
    if (!response) return;

    setCategoryOptions(
      response.results.map((category) => {
        return {
          label: category.name,
          value: category.id.toString(),
        };
      })
    );
  };

  const clearFilters = () => {
    setFilterParams({
      filter: filterParams?.filter,
      categoryIds: undefined,
      userId: undefined,
    });
  };

  const setCategoryIds = (categoryIds?: string[]) => {
    setFilterParams({ ...filterParams, categoryIds: categoryIds?.map((id) => Number(id)) });
  };

  const setUserId = (myRecipes: boolean) => {
    if (!currentUser) return;

    setFilterParams({ ...filterParams, userId: myRecipes ? currentUser.id : undefined });
  };

  React.useEffect(() => {
    getCategoryOptions();
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      style={{ ...DEFAULT_SHADOW_STYLES }}>
      <OutsidePressHandler disabled={false} onOutsidePress={close}>
        <Container>
          <InlineView>
            <Subtitle>Filtros</Subtitle>
            <Button small color="aqua" variant="text" onPress={clearFilters}>
              Limpar
            </Button>
          </InlineView>
          <Body>Categorias</Body>
          <Select
            value={filterParams?.categoryIds?.map((id) => id.toString())}
            onChange={setCategoryIds}
            items={categoryOptions}
            placeholder="Selecione categorias"
            searchPlaceholder="Buscar"
          />
          {!currentUser && (
            <CheckboxWithLabel
              checked={!!filterParams?.userId}
              onChange={setUserId}
              label="Apenas receitas curtidas"
            />
          )}
        </Container>
      </OutsidePressHandler>
    </BottomSheetModal>
  );
};
