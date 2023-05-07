import { Slot } from 'expo-router';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { BottomBarNavigator } from 'app/components';

const ScreenLayout: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Slot />
      </ScrollView>
      <BottomBarNavigator />
    </View>
  );
};

export default ScreenLayout;
