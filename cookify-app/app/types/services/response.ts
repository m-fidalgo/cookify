import { PaginationResponse } from './pagination';

export type PaginatedResponse<T extends object> = PaginationResponse & {
  results: T[];
};
