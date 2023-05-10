import { Body } from 'app/components/typography';

import { Icon } from '../Icon';
import { IconContainer, NoResultsContainer } from './styles';
import { NoResultsProps } from './types';

export const NoResults: React.FC<NoResultsProps> = ({ heightInPx, message }) => {
  return (
    <NoResultsContainer heightInPx={heightInPx}>
      <IconContainer>
        <Icon name="search" color="gray" size="large" />
      </IconContainer>
      <Body color="gray">{message}</Body>
    </NoResultsContainer>
  );
};
