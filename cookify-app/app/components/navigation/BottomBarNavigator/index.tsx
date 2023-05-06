import { usePathname, useRouter } from 'expo-router';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from 'app/components/common';
import { Body } from 'app/components/typography';
import { IconName } from 'app/types';

import { BottomBar } from './styles';

export const BottomBarNavigator: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items: { route: string; icon: IconName }[] = [
    { route: '/home', icon: 'home' },
    { route: '/search', icon: 'search' },
    { route: '/recipes/new', icon: 'add-circle-outline' },
    { route: '/user', icon: 'person' },
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
