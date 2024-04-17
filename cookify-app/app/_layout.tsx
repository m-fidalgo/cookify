import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <EventProvider style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <View style={{ flex: 1, backgroundColor: HUES.white }}>
              <Slot />
            </View>
          </BottomSheetModalProvider>
        </EventProvider>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default AppLayout;
