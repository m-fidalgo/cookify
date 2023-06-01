import { DefaultValue, atom, selector } from 'recoil';

import { AuthUser, User } from 'app/types';
import { setTokens } from 'app/utils';

import { CURRENT_AUTH_USER_KEY, CURRENT_USER_KEY } from './keys';

export const currentUserState = atom<User | undefined>({
  key: CURRENT_USER_KEY,
  default: undefined,
});

export const currentAuthUserState = selector<AuthUser | undefined>({
  key: CURRENT_AUTH_USER_KEY,
  get: ({ get }) => {
    return get(currentUserState);
  },
  set: ({ set }, user) => {
    if (user instanceof DefaultValue) return;

    setTokens({ access: user?.access, refresh: user?.refresh });
    set(currentUserState, user);
  },
});
