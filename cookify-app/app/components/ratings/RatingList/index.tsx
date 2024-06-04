import * as React from 'react';
import { FC } from 'react';

import { Body, Small, Subtitle } from 'app/components/typography';

import { StarRating } from '../StarRating';
import { ListWrapper, RatingHeaderWrapper, RatingWrapper } from './styles';
import { RatingListProps } from './types';

export const RatingList: FC<RatingListProps> = ({ ratings }) => {
  return (
    <ListWrapper>
      <Subtitle>Avaliações</Subtitle>
      {ratings.map(({ rating, id, text, user }) => (
        <RatingWrapper key={id}>
          <RatingHeaderWrapper>
            <StarRating rating={rating} size={20} />
            <Small italic color="yellow">
              {' '}
              - {user.name}
            </Small>
          </RatingHeaderWrapper>
          <Body>{text}</Body>
        </RatingWrapper>
      ))}
    </ListWrapper>
  );
};
