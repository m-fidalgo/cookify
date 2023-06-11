import { BottomSheetModal } from '@gorhom/bottom-sheet';

export type RecipeFilterBottomSheetProps = {
  bottomSheetRef: React.Ref<BottomSheetModal>;
  close: () => void;
};
