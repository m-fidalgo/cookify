import { atom } from 'recoil';

import { User } from 'app/types';

import { CURRENT_USER_KEY } from './keys';

export const currentUserState = atom<User | undefined>({
  key: CURRENT_USER_KEY,
  default: undefined,
});
