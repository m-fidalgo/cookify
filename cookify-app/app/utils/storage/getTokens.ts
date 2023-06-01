import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTokens = async () => {
  const access = await AsyncStorage.getItem('accessToken');
  const refresh = await AsyncStorage.getItem('refreshToken');

  return { access, refresh };
};
