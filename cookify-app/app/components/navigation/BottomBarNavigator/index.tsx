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

  const items: { route: string; icon: IconName; requiresAuth?: boolean }[] = [
    { route: '/home', icon: 'home' },
    { route: '/search', icon: 'search' },
    { route: '/recipes', icon: 'add-circle-outline', requiresAuth: true },
    { route: '/user', icon: 'person', requiresAuth: true },
  ];

  const handleOnPress = (route: string, requiresAuth?: boolean) => {
    if (pathname === route) return;
    if (requiresAuth && !currentUser) router.push({ pathname: '/login', params: { route } });
    else router.push(route);
  };

  return (
    <BottomBar>
      {items.map(({ route, icon, requiresAuth }, index) => {
        return (
          <IconButton
            key={index}
            onPress={() => handleOnPress(route, requiresAuth)}
            name={icon}
            color={pathname === route ? 'yellow' : 'gray'}
          />
        );
      })}
    </BottomBar>
  );
};
