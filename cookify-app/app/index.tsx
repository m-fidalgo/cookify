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

import { Button, Chip, ImageUploader, SectionButton, TextInput } from 'app/components';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  const removeSplashScreen = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  const [value, setValue] = React.useState<string | undefined>();

  if (!fontsLoaded) return null;

  return (
    <EventProvider style={{ flex: 1 }}>
      <View style={styles.container} onLayout={removeSplashScreen}>
        <Button onPress={() => console.log('ok')}>aaa</Button>
        <SectionButton color="aqua" onPress={() => console.log('ok')} title="Title" />
        <Chip text="Categoria!" />
        <TextInput placeholder="Placheolder" value={value} onChange={setValue} />
        <ImageUploader />
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
