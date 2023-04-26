import { ObjectType } from 'app/types';

import { HUES } from './palette';

export type BorderRadius = 'small' | 'large';

export const BORDER_RADIUS: ObjectType<BorderRadius> = {
  small: '8px',
  large: '16px',
};
