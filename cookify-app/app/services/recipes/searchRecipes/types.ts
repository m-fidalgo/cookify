import { PaginatedResponse, PaginationParams, Recipe, SortDirection } from 'app/types';

type RecipeSortBy = 'popular' | 'created_at';

export type SearchRecipesParams = PaginationParams & {
  sortDirection?: SortDirection;
  sortBy?: RecipeSortBy;
  categoryIds?: number[];
};

export type SearchRecipesResponse = PaginatedResponse<Recipe>;
