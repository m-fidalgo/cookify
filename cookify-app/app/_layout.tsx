import { Slot } from 'expo-router';
import { View } from 'react-native';
import { EventProvider } from 'react-native-outside-press';
import { RecoilRoot } from 'recoil';

import { HUES } from './constants';

const AppLayout: React.FC = () => {
  return (
    <RecoilRoot>
      <EventProvider style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: HUES.white }}>
          <Slot />
        </View>
      </EventProvider>
    </RecoilRoot>
  );
};

export default AppLayout;
