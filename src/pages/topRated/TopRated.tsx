import { Box } from "@mui/material";
import ArticlesList from "components/features/ArticlesList";
import PageTitle from "components/ui/PageTitle";
import useFetchArticles from "hooks/useFetchArticles";

const TopRated = () => {
  const { isLoading, isError, articles } = useFetchArticles({ sort: { field: 'views', _order: "DESC" } });

  return (
    <Box>
      <PageTitle>Top rated</PageTitle>
      <ArticlesList isLoading={isLoading} articles={articles} isError={isError} />
    </Box>
  );
}

export default TopRated;