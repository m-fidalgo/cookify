import { ObjectType } from 'app/types';

export type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export const SIZES: ObjectType<Size> = {
  extraSmall: '4px',
  small: '8px',
  medium: '12px',
  large: '18px',
  extraLarge: '24px',
};
