import SkeletonLoader from 'expo-skeleton-loader';
import { Dimensions } from 'react-native';

import { HUES } from 'app/constants';

export const RecipesScreenSkeleton: React.FC = () => {
  const width = Dimensions.get('window').width - 48;

  return (
    <SkeletonLoader boneColor={HUES.lightGray} highlightColor={HUES.skeletonGray}>
      <SkeletonLoader.Container style={{ padding: 24, gap: 16 }}>
        <SkeletonLoader.Item style={{ width: 150, height: 32, borderRadius: 4 }} />
        <SkeletonLoader.Container style={{ gap: 8 }}>
          <SkeletonLoader.Item style={{ width: 50, height: 18, borderRadius: 4 }} />
          <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container style={{ gap: 8 }}>
          <SkeletonLoader.Item style={{ width: 50, height: 18, borderRadius: 4 }} />
          <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SkeletonLoader.Container style={{ gap: 8 }}>
            <SkeletonLoader.Item style={{ width: 50, height: 18, borderRadius: 4 }} />
            <SkeletonLoader.Item style={{ width: width / 2 - 12, height: 40, borderRadius: 4 }} />
          </SkeletonLoader.Container>
          <SkeletonLoader.Container style={{ gap: 8 }}>
            <SkeletonLoader.Item style={{ width: 50, height: 18, borderRadius: 4 }} />
            <SkeletonLoader.Item style={{ width: width / 2, height: 40, borderRadius: 4 }} />
          </SkeletonLoader.Container>
        </SkeletonLoader.Container>
        <SkeletonLoader.Item style={{ width: 150, height: 28, borderRadius: 4 }} />
        <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
        <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
        <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
        <SkeletonLoader.Container style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <SkeletonLoader.Item style={{ width: 150, height: 40, borderRadius: 4 }} />
        </SkeletonLoader.Container>
        <SkeletonLoader.Item style={{ width: 150, height: 28, borderRadius: 4 }} />
        <SkeletonLoader.Item style={{ width: width, height: 40, borderRadius: 4 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
};
