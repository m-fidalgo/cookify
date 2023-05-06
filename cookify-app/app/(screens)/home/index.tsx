import { Link } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Body } from 'app/components';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Body>home</Body>
      <Link href="/other" replace>
        go to other
      </Link>
    </View>
  );
};

export default HomeScreen;
