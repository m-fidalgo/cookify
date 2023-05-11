import { usePathname, useRouter } from 'expo-router';
import { useRecoilValue } from 'recoil';

import { IconButton } from 'app/components/common';
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
    { route: '/recipes/new', icon: 'add-circle-outline' },
    { route: '/user', icon: 'person' },
  ];

  const handleOnPress = (route: string) => {
    if (pathname === route) return;
    if (!currentUser) router.push({ pathname: '/login', params: { route } });
    else router.push(route);
  };

  return (
    <BottomBar>
      {items.map(({ route, icon }, index) => {
        return (
          <IconButton
            key={index}
            onPress={() => handleOnPress(route)}
            name={icon}
            color={pathname === route ? 'yellow' : 'gray'}
          />
        );
      })}
    </BottomBar>
  );
};
