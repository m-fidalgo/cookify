import { Body } from 'app/components/typography';
import { Hue } from 'app/constants';

import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  onPress,
  color = 'yellow',
  variant = 'solid',
  children,
}) => {
  return (
    <ButtonContainer color={color} variant={variant} onPress={onPress}>
      <Body bold color={(variant === 'solid' ? 'white' : color) as Hue}>
        {children}
      </Body>
    </ButtonContainer>
  );
};
