import { ObjectType } from 'app/types';

export type ZIndex = 'small' | 'medium' | 'large';

export const Z_INDEX: ObjectType<ZIndex> = {
  small: 10,
  medium: 100,
  large: 999,
};
