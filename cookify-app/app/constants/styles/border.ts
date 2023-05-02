import { ObjectType } from 'app/types';

export type BorderRadius = 'small' | 'large' | 'circle';

export const BORDER_RADIUS: ObjectType<BorderRadius> = {
  small: '8px',
  large: '16px',
  circle: '50px',
};
