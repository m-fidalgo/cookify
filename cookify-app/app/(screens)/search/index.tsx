import { BottomSheetModal } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { useResetRecoilState } from 'recoil';

import {
  BottomBarNavigator,
  RecipeFilterBottomSheet,
  RecipeList,
  RecipesSearchBar,
} from 'app/components';
import { recipeFiltersState, recipeOffsetState } from 'app/state/recipe';

const SearchScreen: React.FC = () => {
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const resetFilters = useResetRecoilState(recipeFiltersState);
  const resetOffset = useResetRecoilState(recipeOffsetState);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
  };

  React.useEffect(() => {
    return () => {
      resetOffset();
      resetFilters();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <RecipesSearchBar onClickFilter={openBottomSheet} />
      <RecipeList />
      <BottomBarNavigator />
      <RecipeFilterBottomSheet bottomSheetRef={bottomSheetRef} close={closeBottomSheet} />
    </SafeAreaView>
  );
};

export default SearchScreen;
