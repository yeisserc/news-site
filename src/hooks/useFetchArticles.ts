import { useQuery } from "@tanstack/react-query";
import { Article } from "types/features/Article";
import articlesService from "services/articlesService";
import { PaginatedResponse } from "types/utils/PaginatedResponse";
import { Query } from "types/utils/Query";

const useFetchArticles = (query: Query<Article>) => {
  const { isLoading, isError, data } = useQuery<PaginatedResponse<Article>>(
    ['articles', query],
    () => articlesService.getArticlesByQuery(query),
    {
      refetchOnWindowFocus: true
    }
  );

  return { isLoading, isError, articles: data?.data, pages: data?.pages };
}

export default useFetchArticles;