import { Slot } from 'expo-router';
import { View } from 'react-native';

import { BottomBarNavigator } from 'app/components';

const ScreenLayout: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <BottomBarNavigator />
    </View>
  );
};

export default ScreenLayout;
