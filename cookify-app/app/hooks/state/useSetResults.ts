import { RecoilState, useRecoilCallback } from 'recoil';

import { IdentifiableObject, PaginatedResponse, PaginationResponse } from 'app/types';

import { useSetObjects } from './useSetObjects';

type Params<T extends IdentifiableObject> = {
  paginationState: RecoilState<PaginationResponse | undefined>;
  idsState: RecoilState<number[] | undefined>;
  objectState: (id: number) => RecoilState<T | undefined>;
};

export const useSetResults = <T extends IdentifiableObject>({
  paginationState,
  idsState,
  objectState,
}: Params<T>) => {
  const setObjects = useSetObjects({ idsState, objectState });

  return useRecoilCallback(
    ({ set }) =>
      (response: PaginatedResponse<T>) => {
        set(paginationState, {
          count: response.count,
          next: response.next,
          previous: response.previous,
        });
        setObjects(response.results);
      },
    []
  );
};
