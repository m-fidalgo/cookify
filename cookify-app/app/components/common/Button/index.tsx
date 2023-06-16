import { Body, Small } from 'app/components/typography';
import { Hue } from 'app/constants';

import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  onPress,
  color = 'yellow',
  variant = 'solid',
  children,
  small = false,
  disabled = false,
}) => {
  return (
    <ButtonContainer
      color={disabled ? 'lightGray' : color}
      variant={variant}
      disabled={disabled}
      onPress={onPress}>
      {small ? (
        <Small color={(variant === 'solid' ? 'white' : color) as Hue}>{children}</Small>
      ) : (
        <Body bold color={(variant === 'solid' ? 'white' : color) as Hue}>
          {children}
        </Body>
      )}
    </ButtonContainer>
  );
};
