import { ObjectType } from 'app/types';

export type Padding = 'extraSmall' | 'small' | 'medium' | 'large';

export const PADDING: ObjectType<Padding> = {
  extraSmall: '4px',
  small: '8px',
  medium: '12px',
  large: '18px',
};
