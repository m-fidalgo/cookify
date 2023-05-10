import { atom } from 'recoil';

import { AuthUser } from 'app/types';

import { CURRENT_USER_KEY } from './keys';

export const currentUserState = atom<AuthUser | undefined>({
  key: CURRENT_USER_KEY,
  default: undefined,
});
