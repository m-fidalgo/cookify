import * as React from 'react';
import { FC } from 'react';

import { Card } from 'app/components/layout';
import { Subtitle, Title } from 'app/components/typography';

import { CardContainer, SectionContainer, TitleContainer } from './styles';
import { MenuSectionProps } from './types';

const LABEL_BY_INDEX: Record<number, string> = {
  0: 'Café da Manhã',
  1: 'Almoço',
  2: 'Jantar',
};

export const MenuSection: FC<MenuSectionProps> = ({ menu, onPressItem }) => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title color="yellow">Cardápio do Dia</Title>
      </TitleContainer>
      {menu.map(({ images, title, id }, index) => {
        return (
          <CardContainer key={id}>
            <Subtitle>{LABEL_BY_INDEX[index]}</Subtitle>
            <Card
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
