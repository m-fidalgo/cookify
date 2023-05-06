import { RecoilState, useRecoilCallback } from 'recoil';

import { IdentifiableObject } from 'app/types';

type Params<T extends IdentifiableObject> = {
  idsState: RecoilState<number[] | undefined>;
  objectState: (id: number) => RecoilState<T | undefined>;
};

export const useSetObjects = <T extends IdentifiableObject>({ idsState, objectState }: Params<T>) =>
  useRecoilCallback(
    ({ set, snapshot }) =>
      async (results: T[]) => {
        const currentIds = await snapshot.getPromise(idsState);
        const ids = results.reduce((ids, result) => {
          set(objectState(result.id), result);
          if (!currentIds?.includes(result.id)) ids.push(result.id);
          return ids;
        }, [] as number[]);
        set(idsState, currentIds ? [...currentIds, ...ids] : ids);
      },
    []
  );
