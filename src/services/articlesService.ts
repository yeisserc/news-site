import { Article } from "types/features/Article";
import { PaginatedResponse } from "types/utils/PaginatedResponse";
import { Query } from "types/utils/Query";
import { getQueryStringFromQuery, getPaginatedResponse } from "utils/url";
import api from "./axios";

const articlesService = {
  getArticleById: async function (id: string): Promise<Article> {
    const { data } = await api.get(`/articles/${id}`);

    return data;
  },
  
  getArticlesByQuery: async function (query: Query<Article>): Promise<PaginatedResponse<Article>> {
    const queryString = getQueryStringFromQuery(query);

    const res = await api.get<Article[]>(`/articles?${queryString}`);

    const paginatedResponse = getPaginatedResponse(res);

    return paginatedResponse;
  },
};

export default articlesService;