import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { EventProvider } from 'react-native-outside-press';

import { Select, TextInput } from 'app/components';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const [value, setValue] = React.useState<string[]>();

  const removeSplashScreen = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <EventProvider style={{ flex: 1 }}>
      <View style={styles.container} onLayout={removeSplashScreen}>
        <TextInput placeholder="Placheolder" onChange={() => console.log('ok')} />
        <Select
          placeholder="Placheolder"
          searchPlaceholder="search"
          items={data}
          value={value}
          onChange={setValue}
        />
      </View>
    </EventProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
