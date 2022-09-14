import { useQuery } from "@tanstack/react-query";
import { Article } from "types/features/Article";
import articlesService from "services/articlesService";

const useFetchArticle = (id?: string) => {
  const { isLoading, isError, data: article } = useQuery<Article>(
    ['article', id],
    () => articlesService.getArticleById(id!),
    {
      refetchOnWindowFocus: false,
      enabled: !!id
    }
  );

  return { isLoading, isError, article };
}

export default useFetchArticle;