import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Body, Button, Divider, Error, TextInput, Title } from 'app/components';
import { currentUserState } from 'app/state/user';

import { FormItem } from './styles';
import { FormValues } from './types';

export const UserForm: React.FC = () => {
  const currentUser = useRecoilValue(currentUserState);
  const [errorMessage, setErrorMesage] = React.useState('');
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: currentUser?.email,
      name: currentUser?.name,
      password: undefined,
      password1: undefined,
    },
  });

  const submit = async () => {};

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: 'Campo obrigatório',
        }}
        name="email"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <FormItem>
            <Body>Email</Body>
            <TextInput value={value} onChange={onChange} placeholder="exemplo@email.com" />
            {errors.email?.message && <Error color="gray">{errors.email.message}</Error>}
          </FormItem>
        )}
      />
      <Controller
        control={control}
        rules={{
          required: 'Campo obrigatório',
        }}
        name="name"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <FormItem>
            <Body>Nome</Body>
            <TextInput value={value} onChange={onChange} placeholder="João da Silva" />
            {errors.name?.message && <Error color="gray">{errors.name.message}</Error>}
          </FormItem>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <FormItem>
            <Body>Senha</Body>
            <TextInput secureTextEntry value={value} onChange={onChange} />
          </FormItem>
        )}
      />
      <Controller
        control={control}
        rules={{
          required: 'Confirme sua senha',
        }}
        name="password1"
        render={({ field: { onChange, value } }) => (
          <FormItem>
            <Body>Confirmar senha</Body>
            <TextInput secureTextEntry value={value} onChange={onChange} />
            {errorMessage && <Error color="gray">{errorMessage}</Error>}
          </FormItem>
        )}
      />
      <Divider size="extraLarge" />
      <Button onPress={handleSubmit(submit)}>Confirmar</Button>
    </>
  );
};
