import * as React from 'react';
import { View } from 'react-native';

import { Body } from 'app/components';

import { AuthContentView, RoundView } from './styles';

const AuthScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <RoundView />
      <AuthContentView>
        <Body>aaa</Body>
      </AuthContentView>
    </View>
  );
};

export default AuthScreen;
