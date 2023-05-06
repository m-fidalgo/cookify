import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { EventProvider } from 'react-native-outside-press';

import { HUES } from './constants';

const AppLayout: React.FC = () => {
  return (
    <EventProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: HUES.white }}>
        <Slot />
      </SafeAreaView>
    </EventProvider>
  );
};

export default AppLayout;
