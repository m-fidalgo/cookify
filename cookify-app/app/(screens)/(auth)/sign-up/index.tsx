import { Link } from 'expo-router';
import * as React from 'react';

import { Button, Divider, Small, TextInput } from 'app/components';

import { ActionsContainer, InputsContainer } from '../styles';

const SignUpScreen: React.FC = () => {
  const [name, setName] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [password1, setPassword1] = React.useState<string | undefined>();

  const handleSignUp = async () => {};

  return (
    <>
      <InputsContainer>
        <TextInput value={name} onChange={setName} placeholder="Nome" />
        <TextInput
          value={email}
          onChange={setEmail}
          keyboardType="email-address"
          placeholder="E-mail"
        />
        <TextInput value={password} onChange={setPassword} placeholder="Senha" />
        <TextInput value={password1} onChange={setPassword1} placeholder="Confirmar Senha" />
      </InputsContainer>
      <ActionsContainer>
        <Button onPress={handleSignUp}>Cadastrar</Button>
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
