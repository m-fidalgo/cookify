import { useRouter } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { IconButton } from 'app/components/common';
import { Body } from 'app/components/typography';
import { currentUserState } from 'app/state/user';

import { UserIcon } from '../UserIcon';
import { HeaderContainer, IconContainer } from './styles';

export const UserHeader: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);

  const goToSettings = () => {
    router.push('/settings');
  };

  if (!currentUser) return null;

  return (
    <HeaderContainer>
      <IconContainer>
        <UserIcon />
        <Body bold style={{ marginTop: 4 }}>
          Olá, {currentUser.name}
        </Body>
      </IconContainer>
      <IconButton color="gray" name="settings" onPress={goToSettings} />
    </HeaderContainer>
  );
};
