import { useRouter } from 'expo-router';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { IconButton } from 'app/components/common';
import { Body } from 'app/components/typography';
import { currentUserState } from 'app/state/user';

import { UserIcon } from '../UserIcon';
import { HeaderContainer, IconContainer } from './styles';

export const UserHeader: React.FC = () => {
  const router = useRouter();
  const currentUser = useRecoilValue(currentUserState);
  const resetCurrentUser = useResetRecoilState(currentUserState);

  const goToSettings = () => {
    router.push('/settings');
  };

  const signOut = () => {
    resetCurrentUser();
    router.push('/home');
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
      <IconContainer spaced>
        <IconButton color="gray" name="settings" onPress={goToSettings} />
        <IconButton color="gray" name="power-settings-new" onPress={signOut} />
      </IconContainer>
    </HeaderContainer>
  );
};
