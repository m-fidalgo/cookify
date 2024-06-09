import * as React from 'react';
import { FC } from 'react';

import { Card } from 'app/components/layout';
import { Title } from 'app/components/typography';

import { CardContainer, SectionContainer, TitleContainer } from './styles';
import { MenuSectionProps } from './types';

export const MenuSection: FC<MenuSectionProps> = ({ menu, onPressItem }) => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title color="yellow">Cardápio do Dia</Title>
      </TitleContainer>
      {menu.map(({ images, title, id }) => {
        return (
          <CardContainer>
            <Card
              small
              key={id}
              imageUrl={images.length ? images[0]?.url : undefined}
              title={title}
              onPress={() => onPressItem(id)}
            />
          </CardContainer>
        );
      })}
    </SectionContainer>
  );
};
