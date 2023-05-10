import { View } from 'react-native';

import { AuthContentView, Logo, RoundView } from './styles';

const AuthScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <RoundView />
      <AuthContentView>
        <Logo source={require('assets/images/logo.png')} />
      </AuthContentView>
    </View>
  );
};

export default AuthScreen;
