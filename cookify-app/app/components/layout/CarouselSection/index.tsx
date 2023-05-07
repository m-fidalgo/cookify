import * as React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { Icon, NoResults } from 'app/components/common';
import { Title } from 'app/components/typography';

import { Card } from '../Card';
import { CAROUSEL_HEIGHT, SCROLLING_OFFSET, SCROLLING_SCALE } from './config';
import { CardContainer, SectionContainer, SeeMoreButton, TitleContainer } from './styles';
import { CarouselSectionProps } from './types';

export * from './skeleton';

export const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  emptyResultsMessage,
  data,
  onPressItem,
  onPressSeeMore,
}) => {
  const width = Dimensions.get('window').width;

  return (
    <SectionContainer>
      <TitleContainer>
        <Title color="yellow">{title}</Title>
      </TitleContainer>
      {data.length === 0 ? (
        <NoResults heightInPx={CAROUSEL_HEIGHT / 2} message={emptyResultsMessage} />
      ) : (
        <Carousel
          loop={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: SCROLLING_SCALE,
            parallaxScrollingOffset: SCROLLING_OFFSET,
          }}
          width={width}
          height={CAROUSEL_HEIGHT}
          data={data}
          renderItem={({ item, index }) => (
            <CardContainer>
              <Card
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                onPress={() => onPressItem(item.id)}
              />
              {index === data.length - 1 && (
                <SeeMoreButton onPress={onPressSeeMore}>
                  <Icon name="chevron-right" color="aqua" size="large" />
                </SeeMoreButton>
              )}
            </CardContainer>
          )}
        />
      )}
    </SectionContainer>
  );
};