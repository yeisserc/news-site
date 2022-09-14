type Order = "ASC" | "DESC";

export interface Sort<T> {
  field: keyof T;
  _order?: Order;
}