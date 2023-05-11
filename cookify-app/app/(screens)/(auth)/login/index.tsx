import { Link, useRouter, useSearchParams } from 'expo-router';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { Button, Divider, Error, Small, TextInput } from 'app/components';
import { login } from 'app/services';
import { currentUserState } from 'app/state/user';

import { ActionsContainer, InputsContainer } from '../styles';
import { FormValues } from './types';

const LoginScreen: React.FC = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const router = useRouter();
  const { route } = useSearchParams();
  const [errorMessage, setErrorMesage] = React.useState('');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const handleLogin = async ({ email, password }: FormValues) => {
    const user = await login({ email, password });
    if (!user) setErrorMesage('Dados inválidos!');
    setCurrentUser(user);
    router.push(route ? route?.toString() : '/home');
    reset();
  };

  React.useEffect(() => {
    if (errors?.email?.message) setErrorMesage(errors.email.message);
    else if (errors?.password?.message) setErrorMesage(errors.password.message);
    else setErrorMesage('');
  }, [errors.email, errors.password]);

  return (
    <>
      <InputsContainer>
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
        <Error>{errorMessage}</Error>
      </InputsContainer>
      <ActionsContainer>
        <Button onPress={handleSubmit(handleLogin)}>Login</Button>
        <Divider size="large" />
        <Small>Não tem uma conta?</Small>
        <Link href="/sign-up">
          <Small color="aqua">Cadastre-se</Small>
        </Link>
      </ActionsContainer>
    </>
  );
};

export default LoginScreen;
