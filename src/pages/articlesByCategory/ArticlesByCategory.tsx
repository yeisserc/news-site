import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ArticlesList from "components/features/ArticlesList";
import PageTitle from "components/ui/PageTitle";
import useFetchArticles from "hooks/useFetchArticles";
import usePaginator from "hooks/usePaginator";
import Paginator from "components/ui/Paginator";
import useFetchCategory from "./hooks/useFetchCategory";

const ArticlesByCategory = () => {
  const { categoryId } = useParams();
  const { page, handleChange } = usePaginator();

  const fetchCategory = useFetchCategory(categoryId);

  const { isLoading, isError, articles, pages } = useFetchArticles({
    filter: { category: categoryId },
    pagination: { _page: page }
  });

  return (
    <Box>
      <PageTitle>{fetchCategory.category?.title}</PageTitle>
      <ArticlesList isLoading={isLoading} articles={articles} isError={isError} />
      <Paginator pages={pages} page={page} onChange={handleChange} />
    </Box>
  );
}

export default ArticlesByCategory;