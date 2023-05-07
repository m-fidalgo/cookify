export type PaginationParams = {
  page: number;
  pageSize?: number;
};

export type PaginationResponse = {
  count: number;
  next?: string;
  previous?: string;
};
