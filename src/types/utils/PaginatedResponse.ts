export interface PaginatedResponse<T> {
  data: T[];
  pages: number;
}