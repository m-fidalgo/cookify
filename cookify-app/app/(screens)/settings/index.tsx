import { useRouter } from 'expo-router';

import { Divider, IconButton, Title } from 'app/components';
import { UserForm } from 'app/components/user/UserForm';

import { FormContainer, IconContainer, SettingsContainer } from './styles';

const SettingsScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SettingsContainer>
      <IconContainer>
        <IconButton size="large" color="aqua" onPress={() => router.push('/user')} name="close" />
      </IconContainer>
      <FormContainer>
        <Title>Configurações de Conta</Title>
        <Divider size="extraLarge" />
        <UserForm />
      </FormContainer>
    </SettingsContainer>
  );
};

export default SettingsScreen;
