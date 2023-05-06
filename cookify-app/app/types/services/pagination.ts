export type PaginationParams = {
  page: number;
};

export type PaginationResponse = {
  count: number;
  next?: string;
  previous?: string;
};
