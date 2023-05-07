import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Body } from 'app/components';

const AuthScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Body>aaa</Body>
      </SafeAreaView>
    </>
  );
};

export default AuthScreen;
