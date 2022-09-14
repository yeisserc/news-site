import { AxiosResponse, AxiosResponseHeaders } from "axios";
import { Filter } from "types/utils/Filter";
import { PaginatedResponse } from "types/utils/PaginatedResponse";
import { Pagination } from "types/utils/pagination";
import { Query } from "types/utils/Query";
import { Sort } from "types/utils/Sort";

const parseLinkHeader = (linkHeader: any) => {
  const linkHeadersArray = linkHeader.split( ", " ).map( (header: any) => header.split( "; " ) );
  const linkHeadersMap = linkHeadersArray.map( (header: any) => {
      const thisHeaderRel = header[1].replace( /"/g, "" ).replace( "rel=", "" );
      const thisHeaderUrl = header[0].slice( 1, -1 );
      return [ thisHeaderRel, thisHeaderUrl ]
  } );
  return Object.fromEntries( linkHeadersMap );
}

const getTotalPages = (headers: AxiosResponseHeaders): number => {
  const linkHeadersMap = parseLinkHeader(headers.link);
  const urlParams = new URLSearchParams(linkHeadersMap.last.split("?")[1]);
  return parseInt(urlParams.get('_page')!);
}

export const getPaginatedResponse = <T>(res: AxiosResponse<T[]>): PaginatedResponse<T> => {
  const paginatedResponse: PaginatedResponse<T> = {
    data: res.data,
    pages: getTotalPages(res.headers)
  };

  return paginatedResponse;
}

export const getQueryStringFromQuery = <T extends Object>(query: Query<T>): string => {
  const { filter, pagination, sort } = query;
  let queryString = "";
  
  if(filter) {
    queryString += filterToQueryString(filter);
  }
  
  queryString += "&" + paginationToQueryString(pagination || { _page: 1 });

  if(sort) {
    queryString += "&" + sortToQueryString(sort);
  }

  return queryString;
}

const filterToQueryString = <T extends Object>(filter: Filter<T>): string => {
  const queryString = Object.entries(filter)
                        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                        .join("&");

  return queryString;
}

const paginationToQueryString = (pagination: Pagination): string => {
  const { _page, _limit } = pagination;
  let queryString = "";

  queryString += `_page=${_page}`;

  if(_limit) {
    queryString += `&_limit=${_limit}`;
  }

  return queryString;
}

const sortToQueryString = <T>(sort: Sort<T>): string => {
  const { field, _order } = sort;
  let queryString = "";

  queryString += `_sort=${String(field)}`;

  if(_order) {
    queryString += `&_order=${_order}`;
  }

  return queryString;
}