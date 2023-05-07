import * as React from 'react';
import { View } from 'react-native';

import { Body, CarouselSection } from 'app/components';

const HomeScreen: React.FC = () => {
  const item = {
    id: 1,
    title: 'item',
    imageUrl: 'https://res.cloudinary.com/dabr0d1ey/hlsjd7ghg9yuxtc01wre',
  };

  const handlePressItem = (id: number) => {
    console.log(id);
  };

  return (
    <View>
      <Body>home</Body>
      <CarouselSection
        title="Recentes"
        data={[item, item, item]}
        onPressItem={handlePressItem}
        onPressSeeMore={() => console.log('seemore')}
      />
      <CarouselSection
        title="AA"
        data={[item, item, item]}
        onPressItem={handlePressItem}
        onPressSeeMore={() => console.log('seemore')}
      />
    </View>
  );
};

export default HomeScreen;
