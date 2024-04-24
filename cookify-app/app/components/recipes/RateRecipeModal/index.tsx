import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Modal } from 'app/components/common';
import { TextInput } from 'app/components/forms';
import { StarRating } from 'app/components/ratings';
import { createRating, updateRating } from 'app/services';

import { ButtonsContainer } from './styles';
import { FormValues, RateRecipeModalProps } from './types';

export const RateRecipeModal: React.FC<RateRecipeModalProps> = ({
  open,
  onClose,
  onDone,
  recipeId,
  rating,
}) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      ratingValue: rating?.rating || 3,
      text: rating?.text,
    },
  });

  const submit = async ({ ratingValue, text }: FormValues) => {
    const dataParams = { rating: ratingValue, text };
    let response;
    if (rating) {
      response = await updateRating(rating.id, dataParams);
    } else {
      response = await createRating({ ...dataParams, recipeId });
    }
    if (response) onDone();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Controller
        control={control}
        rules={{ required: true }}
        name="ratingValue"
        render={({ field: { onChange } }) => <StarRating onFinishRating={onChange} />}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="text"
        render={({ field: { onChange, value } }) => (
          <TextInput multiline numberOfLines={4} onChange={onChange} value={value} />
        )}
      />
      <ButtonsContainer>
        <Button variant="text" onPress={onClose}>
          Cancelar
        </Button>
        <Button onPress={handleSubmit(submit)}>Avaliar</Button>
      </ButtonsContainer>
    </Modal>
  );
};
