import { BottomSheetModal } from '@gorhom/bottom-sheet';
import * as React from 'react';
import OutsidePressHandler from 'react-native-outside-press';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { Button, Divider } from 'app/components/common';
import { CheckboxWithLabel, Select, TextInput } from 'app/components/forms';
import { TagInput } from 'app/components/forms/TagInput';
import { Body, Subtitle } from 'app/components/typography';
import { DEFAULT_SHADOW_STYLES } from 'app/constants';
import { RecipeFilterParams, getCategories } from 'app/services';
import { recipeFiltersChangedState, recipeFiltersState, recipeOffsetState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';
import { SelectItem } from 'app/types';

import { DIFFICULTY_OPTIONS } from './config';
import { CheckboxContainer, Container, InlineItem, InlineView, Item } from './styles';
import { RecipeFilterBottomSheetProps } from './types';

export const RecipeFilterBottomSheet: React.FC<RecipeFilterBottomSheetProps> = ({
  bottomSheetRef,
  close,
}) => {
  const currentUser = useRecoilValue(currentUserState);
  const resetOffset = useResetRecoilState(recipeOffsetState);
  const setFilterChanged = useSetRecoilState(recipeFiltersChangedState);
  const [filterParams, setFilterParams] = useRecoilState(recipeFiltersState);
  const [categoryOptions, setCategoryOptions] = React.useState<SelectItem[]>([]);
  const snapPoints = React.useMemo(() => ['25%', currentUser ? '90%' : '80%'], [currentUser]);

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

  const setFilters = (filters: RecipeFilterParams) => {
    setFilterParams(filters);
    setFilterChanged(true);
    resetOffset();
  };

  const clearFilters = () => {
    setFilters({
      filter: filterParams?.filter,
      categoryIds: undefined,
      difficulties: undefined,
      time: undefined,
      servings: undefined,
      creatorId: undefined,
      liked: undefined,
    });
  };

  const setCategoryIds = (categoryIds?: string[]) => {
    setFilters({ ...filterParams, categoryIds: categoryIds?.map((id) => Number(id)) });
  };

  const setDifficulties = (difficulties?: string[]) => {
    setFilters({ ...filterParams, difficulties: difficulties?.map((id) => Number(id)) });
  };

  const setTime = (time?: string) => {
    setFilters({ ...filterParams, time: Number(time) });
  };

  const setServings = (servings?: string) => {
    setFilters({ ...filterParams, servings });
  };

  const setLiked = (liked: boolean) => {
    if (!currentUser) return;

    setFilters({ ...filterParams, liked: liked ? true : undefined });
  };

  const setCreatorId = (myRecipes: boolean) => {
    if (!currentUser) return;

    setFilters({ ...filterParams, creatorId: myRecipes ? currentUser.id : undefined });
  };

  const setIncludedIngredients = (ingredients: string[]) => {
    setFilters({ ...filterParams, includedIngredients: ingredients });
  };

  const setExcludedIngredients = (ingredients: string[]) => {
    setFilters({ ...filterParams, excludedIngredients: ingredients });
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
          <Divider size="medium" />
          <Item>
            <Body>Categorias</Body>
            <Select
              value={filterParams?.categoryIds?.map((id) => id.toString())}
              onChange={setCategoryIds}
              items={categoryOptions}
              placeholder="Selecione categorias"
              searchPlaceholder="Buscar"
            />
          </Item>
          <Item>
            <Body>Dificuldade</Body>
            <Select
              value={filterParams?.difficulties?.map((d) => d.toString())}
              onChange={setDifficulties}
              items={DIFFICULTY_OPTIONS}
              placeholder="Selecione dificuldades"
            />
          </Item>
          <InlineView>
            <InlineItem>
              <Body>Tempo de preparo</Body>
              <TextInput
                keyboardType="numeric"
                value={filterParams?.time?.toString()}
                onChange={setTime}
                placeholder="Ex: 45(min)"
              />
            </InlineItem>
            <InlineItem>
              <Body>Rendimento</Body>
              <TextInput
                value={filterParams?.servings}
                onChange={setServings}
                placeholder="Ex: 2 porções"
              />
            </InlineItem>
          </InlineView>
          <Item>
            <Body>Ingredientes obrigatórios</Body>
            <TagInput
              tags={filterParams?.includedIngredients || []}
              onChangeTags={setIncludedIngredients}
            />
          </Item>
          <Item>
            <Body>Ingredientes não permitidos</Body>
            <TagInput
              tags={filterParams?.excludedIngredients || []}
              onChangeTags={setExcludedIngredients}
            />
          </Item>
          {currentUser && (
            <CheckboxContainer>
              <CheckboxWithLabel
                checked={!!filterParams?.liked}
                onChange={setLiked}
                label="Apenas receitas curtidas"
              />
              <CheckboxWithLabel
                checked={!!filterParams?.creatorId}
                onChange={setCreatorId}
                label="Apenas minhas receitas"
              />
            </CheckboxContainer>
          )}
        </Container>
      </OutsidePressHandler>
    </BottomSheetModal>
  );
};
