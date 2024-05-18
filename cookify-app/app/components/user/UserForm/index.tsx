import { useRouter } from 'expo-router';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { Body, Button, Checkbox, Divider, Error, Subtitle, TextInput } from 'app/components';
import { updateUser } from 'app/services';
import { currentUserState } from 'app/state/user';

import { CheckboxItem, FormItem } from './styles';
import { FormValues } from './types';

export const UserForm: React.FC = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [errorMessage, setErrorMessage] = React.useState('');
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      email: currentUser?.email,
      name: currentUser?.name,
      password: undefined,
      password1: undefined,
      vegan: currentUser?.vegan,
      vegetarian: currentUser?.vegetarian,
      celiac: currentUser?.celiac,
      lactoseIntolerant: currentUser?.lactoseIntolerant,
    },
  });

  const handleUpdate = async ({ password, password1, ...values }: FormValues) => {
    if (password !== password1) {
      setErrorMessage('As senhas devem ser iguais');
      return;
    }

    if (!currentUser) return;

    const updatedUser = await updateUser(currentUser?.id, {
      ...values,
      password,
    });

    if (updatedUser) {
      setCurrentUser({ ...updatedUser, token: currentUser.token });
      router.back();
    }
  };

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
        name="password1"
        render={({ field: { onChange, value } }) => (
          <FormItem>
            <Body>Confirmar senha</Body>
            <TextInput secureTextEntry value={value} onChange={onChange} />
            {errorMessage && <Error color="gray">{errorMessage}</Error>}
          </FormItem>
        )}
      />
      <Divider size="medium" />
      <Subtitle>Preferências</Subtitle>
      <Divider size="medium" />
      <Controller
        control={control}
        name="vegan"
        render={({ field: { onChange, value } }) => (
          <CheckboxItem>
            <Checkbox checked={value} onChange={onChange} />
            <Body>Vegano</Body>
          </CheckboxItem>
        )}
      />
      <Controller
        control={control}
        name="vegetarian"
        render={({ field: { onChange, value } }) => (
          <CheckboxItem>
            <Checkbox checked={value} onChange={onChange} />
            <Body>Vegetariano</Body>
          </CheckboxItem>
        )}
      />
      <Controller
        control={control}
        name="lactoseIntolerant"
        render={({ field: { onChange, value } }) => (
          <CheckboxItem>
            <Checkbox checked={value} onChange={onChange} />
            <Body>Intolerante a lactose</Body>
          </CheckboxItem>
        )}
      />
      <Controller
        control={control}
        name="celiac"
        render={({ field: { onChange, value } }) => (
          <CheckboxItem>
            <Checkbox checked={value} onChange={onChange} />
            <Body>Celíaco</Body>
          </CheckboxItem>
        )}
      />
      <Divider size="extraLarge" />
      <Button onPress={handleSubmit(handleUpdate)} disabled={!isDirty}>
        Salvar
      </Button>
    </>
  );
};
