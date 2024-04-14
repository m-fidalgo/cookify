import { Slot } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventProvider } from 'react-native-outside-press';
import { RecoilRoot } from 'recoil';

import { HUES } from './constants';

const AppLayout: React.FC = () => {
  return (
    <RecoilRoot>
      <GestureHandlerRootView>
        <EventProvider style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: HUES.white }}>
            <Slot />
          </View>
        </EventProvider>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default AppLayout;
