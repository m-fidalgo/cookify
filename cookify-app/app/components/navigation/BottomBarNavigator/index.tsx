import { usePathname, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Icon } from 'app/components/common';
import { currentUserState } from 'app/state/user';
import { IconName } from 'app/types';

import { BottomBar } from './styles';

export const BottomBarNavigator: React.FC = () => {
  const currentUser = useRecoilValue(currentUserState);
  const pathname = usePathname();
  const router = useRouter();

  const items: { route: string; icon: IconName }[] = [
    { route: '/home', icon: 'home' },
    { route: '/search', icon: 'search' },
    { route: currentUser ? '/recipes/new' : '/auth', icon: 'add-circle-outline' },
    { route: currentUser ? '/user' : '/auth', icon: 'person' },
  ];

  const handleOnPress = (route: string) => {
    if (pathname !== route) router.push(route);
  };

  return (
    <BottomBar>
      {items.map(({ route, icon }, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handleOnPress(route)}>
            <Icon name={icon} color={pathname === route ? 'yellow' : 'gray'} />
          </TouchableOpacity>
        );
      })}
    </BottomBar>
  );
};
