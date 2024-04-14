import SkeletonLoader from 'expo-skeleton-loader';
import * as React from 'react';

import { HUES } from 'app/constants';

import { CAROUSEL_HEIGHT } from './config';

export const CarouselSectionSkeleton: React.FC = () => {
  return (
    <SkeletonLoader boneColor={HUES.lightGray} highlightColor={HUES.skeletonGray}>
      <SkeletonLoader.Container style={{ padding: 24 }}>
        <SkeletonLoader.Item style={{ width: 120, height: 32, borderRadius: 4 }} />
        <SkeletonLoader.Container style={{ flexDirection: 'row', marginTop: 24, borderRadius: 4 }}>
          <SkeletonLoader.Item
            style={{ width: 320, height: CAROUSEL_HEIGHT, marginRight: 24, borderRadius: 4 }}
          />
          <SkeletonLoader.Item style={{ width: 320, height: CAROUSEL_HEIGHT, borderRadius: 4 }} />
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
};
