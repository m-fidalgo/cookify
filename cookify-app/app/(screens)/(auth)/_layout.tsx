import { Slot, useRouter } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { IconButton } from 'app/components';

import { AuthContentView, GoBackButtonContainer, Logo, RoundView } from './styles';

const AuthScreensLayout: React.FC = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <RoundView />
      <GoBackButtonContainer>
        <IconButton name="close" color="white" onPress={router.back} />
      </GoBackButtonContainer>
      <AuthContentView>
        <Logo source={require('assets/images/logo.png')} />
        <Slot />
      </AuthContentView>
    </View>
  );
};

export default AuthScreensLayout;
