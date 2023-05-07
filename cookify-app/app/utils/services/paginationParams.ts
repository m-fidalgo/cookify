import { PaginationParams } from 'app/types';

export const paginationParams = ({ page, pageSize }: PaginationParams) => {
  if (pageSize !== undefined) return `?page=${page}&page_size=${pageSize}`;
  else return `?page=${page}`;
};
