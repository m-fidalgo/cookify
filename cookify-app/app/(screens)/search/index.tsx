import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { BottomBarNavigator, RecipeFilterBottomSheet, RecipesSearchBar } from 'app/components';

const SearchScreen: React.FC = () => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <RecipesSearchBar onClickFilter={openBottomSheet} />
        <BottomBarNavigator />
        <RecipeFilterBottomSheet bottomSheetRef={bottomSheetRef} close={closeBottomSheet} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default SearchScreen;
