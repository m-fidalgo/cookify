import { useRouter } from 'expo-router';
import * as React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Dimensions, View } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Button, Divider, IconButton } from 'app/components/common';
import { ImageUploader, Select, TextInput } from 'app/components/forms';
import { Body, Error, Small, Title } from 'app/components/typography';
import {
  createRecipe,
  deleteImage,
  deleteRecipe,
  getCategories,
  updateRecipe,
  uploadImage,
} from 'app/services';
import { currentRecipeState } from 'app/state/recipe';
import { currentUserState } from 'app/state/user';
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
  SectionTitle,
} from './styles';
import { FormValues, RecipeFormProps } from './types';
import { calculateDifficulty } from './utils';

export const RecipeForm: React.FC<RecipeFormProps> = ({ recipe }) => {
  const width = Dimensions.get('window').width;
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentRecipe = useSetRecoilState(currentRecipeState);
  const [categoryOptions, setCategoryOptions] = React.useState<SelectItem[]>([]);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: recipe ? getDefaultValuesFromRecipe(recipe) : DEFAULT_VALUES,
  });
  const ingredientsFieldArray = useFieldArray({
    control,
    name: 'ingredients',
  });
  const preparationStepsFieldArray = useFieldArray({
    control,
    name: 'preparationSteps',
  });
  const watchedIngredients = watch('ingredients');
  const watchedPreparationSteps = watch('preparationSteps');

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

  const createImage = async (uri: string, recipeId: number) => {
    const splitUri = uri.split('.');
    const fileType = splitUri[splitUri.length - 1];
    const imageData = {
      uri,
      name: `${recipeId}.${fileType}`,
      type: `image/${fileType}`,
    };
    const formData = new FormData();
    formData.append('image', imageData as unknown as Blob);
    return await uploadImage(recipeId, formData);
  };

  const submit = async ({
    title,
    categories,
    time,
    servings,
    ingredients,
    preparationSteps,
    image,
  }: FormValues) => {
    if (!currentUser) return;

    let newRecipe, newImage;
    const params = {
      title,
      categories: categories.map((category) => Number(category)),
      time,
      servings,
      ingredients: ingredients.map((ingredient) => ingredient.text),
      preparationSteps: preparationSteps.map((step) => step.text),
      creator: currentUser.id,
      difficulty: calculateDifficulty(ingredients.length, preparationSteps.length, time),
    };

    if (recipe) {
      newRecipe = await updateRecipe(recipe.id, params);

      if (image && !image.id) newImage = await createImage(image.imageUrl, recipe.id);

      if (recipe.images.length && (!image || image.id !== recipe.images[0].id)) {
        for (const image of recipe.images) {
          await deleteImage(image.id);
        }
      }
    } else {
      newRecipe = await createRecipe(params);
      if (image) newImage = await createImage(image.imageUrl, newRecipe.id);
    }

    if (newRecipe) {
      router.push('/recipe');
      setCurrentRecipe({ ...newRecipe, images: newImage ? [newImage] : newRecipe.images });
    }

    reset(DEFAULT_VALUES);
  };

  const handleDelete = async () => {
    if (!recipe) return;

    for (const image of recipe.images) {
      await deleteImage(image.id);
    }

    await deleteRecipe(recipe.id);
    router.push('home');
  };

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
        <SectionTitle>Ingredientes</SectionTitle>
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
        <SectionTitle>Modo de Preparo</SectionTitle>
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
      <SectionTitle>Imagem</SectionTitle>
      <Divider size="small" />
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange, value } }) => (
          <ImageUploader
            imageUri={value?.imageUrl}
            onChange={(uri) => onChange({ id: undefined, imageUrl: uri })}
            sizeInPx={width - 36}
          />
        )}
      />
      <Divider size="extraLarge" />
      <Button onPress={handleSubmit(submit)}>Salvar</Button>
      {recipe && (
        <>
          <Divider size="medium" />
          <Button color="aqua" onPress={handleDelete}>
            Excluir
          </Button>
        </>
      )}
    </>
  );
};
