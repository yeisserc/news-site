import { Box } from "@mui/material";
import ArticlesList from "components/features/ArticlesList";
import PageTitle from "components/ui/PageTitle";
import useFetchArticles from "hooks/useFetchArticles";

const RecentNews = () => {
  const { isLoading, isError, articles } = useFetchArticles({ sort: { field: 'createdAt', _order: "DESC" } });

  return (
    <Box>
      <PageTitle>Recent News</PageTitle>
      <ArticlesList isLoading={isLoading} articles={articles} isError={isError} />
    </Box>
  );
}

export default RecentNews;