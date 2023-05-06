import { PaginatedResponse, PaginationParams, Recipe } from 'app/types';

export type SearchRecipesParams = PaginationParams;

export type SearchRecipesResponse = PaginatedResponse<Recipe>;
