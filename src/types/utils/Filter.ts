export type Filter<T extends Object> = {
  [K in keyof T]?: T[K];
};