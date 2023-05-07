import { ObjectType } from 'app/types';

export type Padding = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export const PADDING: ObjectType<Padding> = {
  extraSmall: '4px',
  small: '8px',
  medium: '12px',
  large: '18px',
  extraLarge: '24px',
};
