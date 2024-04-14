import { Slot } from 'expo-router';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomBarNavigator } from 'app/components';

const MainScreensLayout: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Slot />
      </ScrollView>
      <BottomBarNavigator />
    </SafeAreaView>
  );
};

export default MainScreensLayout;
