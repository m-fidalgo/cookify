import { PaginatedResponse, PaginationParams, Recipe, SortDirection } from 'app/types';

type RecipeSortBy = 'popular' | 'created_at';

export type RecipeFilterParams = {
  filter?: string;
  sortDirection?: SortDirection;
  sortBy?: RecipeSortBy;
  categoryIds?: number[];
  userId?: number;
};

export type SearchRecipesParams = PaginationParams & RecipeFilterParams;

export type SearchRecipesResponse = PaginatedResponse<Recipe>;
