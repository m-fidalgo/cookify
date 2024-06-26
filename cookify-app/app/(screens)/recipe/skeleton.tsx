import SkeletonLoader from 'expo-skeleton-loader';
import * as React from 'react';
import { Dimensions } from 'react-native';

import { HUES } from 'app/constants';

export const RecipeScreenSkeleton: React.FC = () => {
  const width = Dimensions.get('window').width;

  return (
    <SkeletonLoader boneColor={HUES.lightGray} highlightColor={HUES.skeletonGray}>
      <SkeletonLoader.Item style={{ width, height: 280 }} />
      <SkeletonLoader.Container style={{ padding: 24, gap: 24 }}>
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SkeletonLoader.Item style={{ width: 150, height: 32, borderRadius: 4 }} />
          <SkeletonLoader.Item style={{ width: 32, height: 32, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SkeletonLoader.Item style={{ width: 100, height: 16, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <SkeletonLoader.Item style={{ width: 200, height: 25, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SkeletonLoader.Item style={{ width: 100, height: 18, borderRadius: 4 }} />
          <SkeletonLoader.Item style={{ width: 130, height: 18, borderRadius: 4 }} />
          <SkeletonLoader.Item style={{ width: 100, height: 18, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Item style={{ width: 150, height: 28, borderRadius: 4 }} />
        <SkeletonLoader.Item style={{ width: width - 48, height: 300, borderRadius: 4 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
};
