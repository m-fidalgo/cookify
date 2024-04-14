import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { Button, Divider, Error, Small, TextInput } from 'app/components';
import { signUp } from 'app/services';
import { currentUserState } from 'app/state/user';

import { ActionsContainer, InputsContainer } from '../styles';
import { FormValues } from './types';

const SignUpScreen: React.FC = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const router = useRouter();
  const { route } = useLocalSearchParams();
  const [errorMessage, setErrorMesage] = React.useState('');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: undefined,
      name: undefined,
      password: undefined,
      password1: undefined,
    },
  });

  const handleSignUp = async ({ name, email, password, password1 }: FormValues) => {
    if (password !== password1) {
      setErrorMesage('As senhas devem ser iguais');
      return;
    }

    const user = await signUp({ name, email, password });
    if (!user) setErrorMesage('Erro ao cadastrar!');
    setCurrentUser(user);
    router.push(route ? route?.toString() : '/home');
    reset();
  };

  React.useEffect(() => {
    setErrorMesage(
      errors?.name?.message ||
        errors?.email?.message ||
        errors?.password?.message ||
        errors?.password1?.message ||
        ''
    );
  }, [errors.email, errors.password]);

  return (
    <>
      <InputsContainer>
        <Controller
          control={control}
          rules={{
            required: 'Informe seu nome',
          }}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput value={value} onChange={onChange} placeholder="Nome" />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: 'Informe um e-mail',
          }}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChange={onChange}
              keyboardType="email-address"
              placeholder="E-mail"
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: 'Informe uma senha',
          }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChange={onChange}
              keyboardType="default"
              placeholder="Senha"
              secureTextEntry
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: 'Confirme sua senha',
          }}
          name="password1"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChange={onChange}
              keyboardType="default"
              placeholder="Confirmar Senha"
              secureTextEntry
            />
          )}
        />
        <Error>{errorMessage}</Error>
      </InputsContainer>
      <ActionsContainer>
        <Button onPress={handleSubmit(handleSignUp)}>Cadastrar</Button>
        <Divider size="large" />
        <Small>Já possui uma conta?</Small>
        <Link href="/login">
          <Small color="aqua">Login</Small>
        </Link>
      </ActionsContainer>
    </>
  );
};

export default SignUpScreen;
