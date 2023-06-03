import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { View } from 'react-native';

import {
  Body,
  Button,
  Divider,
  Error,
  IconButton,
  Select,
  Small,
  Subtitle,
  TextInput,
  Title,
} from 'app/components';
import { getCategories } from 'app/services';
import { SelectItem } from 'app/types';

import {
  DEFAULT_VALUES,
  EMPTY_INGREDIENT,
  EMPTY_PREPARATION_STEP,
  getDefaultValuesFromRecipe,
} from './config';
import {
  AddFieldButton,
  AddFieldButtonContainer,
  FormItem,
  RemovableField,
  RemovableFieldContainer,
  Row,
  RowItem,
} from './styles';
import { FormValues, RecipeFormProps } from './types';

export const RecipeForm: React.FC<RecipeFormProps> = ({ recipe }) => {
  const [categoryOptions, setCategoryOptions] = React.useState<SelectItem[]>([]);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: recipe ? getDefaultValuesFromRecipe(recipe) : DEFAULT_VALUES,
  });
  const watchedIngredients = watch('ingredients');
  const watchedPreparationSteps = watch('preparationSteps');
  const ingredientsFieldArray = useFieldArray({
    control,
    name: 'ingredients',
  });
  const preparationStepsFieldArray = useFieldArray({
    control,
    name: 'preparationSteps',
  });

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

  const submit = (values: FormValues) => {};

  React.useEffect(() => {
    getCategoryOptions();
  }, []);

  return (
    <>
      <Title>{recipe ? 'Editar' : 'Adicionar'} receita</Title>
      <Divider size="small" />
      <Controller
        control={control}
        rules={{
          required: 'Campo obrigatório',
        }}
        name="title"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <FormItem>
            <Body>Título</Body>
            <TextInput value={value} onChange={onChange} placeholder="Ex: Torta de frango" />
            {errors.title?.message && <Error color="gray">{errors.title.message}</Error>}
          </FormItem>
        )}
      />
      <Controller
        control={control}
        rules={{
          required: 'Selecione uma categoria',
        }}
        name="categories"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <FormItem>
            <Body>Categorias</Body>
            <Select
              value={value}
              onChange={onChange}
              items={categoryOptions}
              placeholder="Selecione categorias"
              searchPlaceholder="Buscar"
            />
            {errors.categories?.message && <Error color="gray">{errors.categories.message}</Error>}
          </FormItem>
        )}
      />
      <Row>
        <Controller
          control={control}
          rules={{
            required: 'Campo obrigatório',
          }}
          name="time"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <RowItem>
              <Body>Tempo de preparo</Body>
              <TextInput
                value={value?.toString()}
                keyboardType="numeric"
                onChange={onChange}
                placeholder="Ex: 45(min)"
              />
              {errors.time?.message && <Small color="gray">{errors.time.message}</Small>}
            </RowItem>
          )}
        />
        <Controller
          control={control}
          rules={{
            required: 'Campo obrigatório',
          }}
          name="servings"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <RowItem>
              <Body>Rendimento</Body>
              <TextInput value={value} onChange={onChange} placeholder="Ex: 2 porções" />
              {errors.servings?.message && <Small color="gray">{errors.servings.message}</Small>}
            </RowItem>
          )}
        />
      </Row>
      <>
        <Divider size="small" />
        <Subtitle>Ingredientes</Subtitle>
        <Divider size="small" />
        {ingredientsFieldArray.fields.map((item, index) => (
          <View key={item.id}>
            <RemovableFieldContainer>
              <RemovableField>
                <Controller
                  rules={{
                    required: 'O campo não pode ser vazio',
                  }}
                  name={`ingredients.${index}.text`}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      hideClearButton
                      value={value}
                      onChange={onChange}
                      placeholder="Adicione um ingrediente"
                    />
                  )}
                />
              </RemovableField>
              <IconButton
                disabled={watchedIngredients.length <= 1}
                onPress={() => ingredientsFieldArray.remove(index)}
                name="close"
                color={watchedIngredients.length <= 1 ? 'lightGray' : 'gray'}
              />
            </RemovableFieldContainer>
            {errors?.ingredients && errors?.ingredients[index]?.text?.message && (
              <Error color="gray">{errors.ingredients[index]?.text?.message}</Error>
            )}
          </View>
        ))}
        <AddFieldButtonContainer>
          <AddFieldButton
            color="aqua"
            onPress={() => ingredientsFieldArray.append(EMPTY_INGREDIENT)}>
            Adicionar
          </AddFieldButton>
        </AddFieldButtonContainer>
      </>
      <>
        <Divider size="small" />
        <Subtitle>Modo de Preparo</Subtitle>
        <Divider size="small" />
        {preparationStepsFieldArray.fields.map((item, index) => (
          <View key={item.id}>
            <RemovableFieldContainer>
              <RemovableField>
                <Controller
                  rules={{
                    required: 'O campo não pode ser vazio',
                  }}
                  name={`preparationSteps.${index}.text`}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      multiline
                      hideClearButton
                      value={value}
                      onChange={onChange}
                      placeholder={`Etapa ${index + 1}`}
                    />
                  )}
                />
              </RemovableField>
              <IconButton
                disabled={watchedPreparationSteps.length <= 1}
                onPress={() => preparationStepsFieldArray.remove(index)}
                name="close"
                color={watchedPreparationSteps.length <= 1 ? 'lightGray' : 'gray'}
              />
            </RemovableFieldContainer>
            {errors?.preparationSteps && errors?.preparationSteps[index]?.text?.message && (
              <Error color="gray">{errors.preparationSteps[index]?.text?.message}</Error>
            )}
          </View>
        ))}
        <AddFieldButtonContainer>
          <AddFieldButton
            color="aqua"
            onPress={() => preparationStepsFieldArray.append(EMPTY_PREPARATION_STEP)}>
            Adicionar
          </AddFieldButton>
        </AddFieldButtonContainer>
      </>
      <Divider size="extraLarge" />
      <Button onPress={handleSubmit(submit)}>Salvar</Button>
    </>
  );
};
