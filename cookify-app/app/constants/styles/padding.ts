import { ObjectType } from 'app/types';

export type Padding = 'small' | 'medium' | 'large';

export const PADDING: ObjectType<Padding> = {
  small: '6px',
  medium: '12px',
  large: '18px',
};
