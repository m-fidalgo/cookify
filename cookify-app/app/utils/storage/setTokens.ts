import AsyncStorage from '@react-native-async-storage/async-storage';

type TokensParams = { access?: string; refresh?: string };

export const setTokens = async ({ access, refresh }: TokensParams) => {
  if (access) await AsyncStorage.setItem('accessToken', access);

  if (refresh) {
    await AsyncStorage.setItem('refreshToken', refresh);
  } else {
    await AsyncStorage.removeItem('refreshToken');
  }
};
