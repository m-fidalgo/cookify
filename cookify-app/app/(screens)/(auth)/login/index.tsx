import { Link } from 'expo-router';
import * as React from 'react';

import { Button, Divider, Small, TextInput } from 'app/components';

import { ActionsContainer, InputsContainer } from '../styles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();

  const handleLogin = async () => {};

  return (
    <>
      <InputsContainer>
        <TextInput
          value={email}
          onChange={setEmail}
          keyboardType="email-address"
          placeholder="E-mail"
        />
        <TextInput
          value={password}
          onChange={setPassword}
          keyboardType="default"
          placeholder="Senha"
        />
      </InputsContainer>
      <ActionsContainer>
        <Button onPress={handleLogin}>Login</Button>
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
