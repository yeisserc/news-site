import { OverridesStyleRules } from "@mui/material/styles/overrides";
import { Filter } from "./Filter";
import { Pagination } from './pagination';
import { Sort } from "./Sort";

export interface Query<T extends Object> {
  filter?: Filter<T>;
  pagination?: Pagination;
  sort?: Sort<T>;
}