import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilValue } from 'recoil';

import { BottomBarNavigator, RecipeFilterBottomSheet, RecipesSearchBar } from 'app/components';
import { recipeHasFiltersState } from 'app/state/recipe';

const SearchScreen: React.FC = () => {
  const hasFilters = useRecoilValue(recipeHasFiltersState);
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
        <ScrollView></ScrollView>
        <BottomBarNavigator />
        <RecipeFilterBottomSheet bottomSheetRef={bottomSheetRef} close={closeBottomSheet} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default SearchScreen;
