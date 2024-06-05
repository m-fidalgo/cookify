import { PaginatedResponse, PaginationParams, Recipe, SortDirection } from 'app/types';

type RecipeSortBy = 'popular' | 'created_at';

export type RecipeFilterParams = {
  categoryIds?: number[];
  creatorId?: number;
  difficulties?: number[];
  filter?: string;
  liked?: boolean;
  servings?: string;
  sortDirection?: SortDirection;
  sortBy?: RecipeSortBy;
  time?: number;
  includedIngredients?: string[];
  excludedIngredients?: string[];
};

export type SearchRecipesParams = PaginationParams & RecipeFilterParams;

export type SearchRecipesResponse = PaginatedResponse<Recipe>;
