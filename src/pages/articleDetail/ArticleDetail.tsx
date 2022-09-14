import { LinearProgress, Stack } from "@mui/material";
import ErrorResult from "components/utils/ErrorResult";
import { useParams } from "react-router-dom";
import ArticleBody from "./components/ArticleBody";
import ArticleCover from "./components/ArticleCover";
import ArticleSubtitle from "./components/ArticleSubtitle";
import ArticleTitle from "./components/ArticleTitle";
import NoArticle from "./components/NoArticle";
import useFetchArticle from "./hooks/useFetchArticle";

const ArticleDetail = () => {
  const { articleId } = useParams();
  const {isLoading, isError, article} = useFetchArticle(articleId);

  if(isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <ErrorResult />;
  }

  if(!article) {
    return <NoArticle />;
  }

  return (
    <Stack spacing={2}>
      <ArticleTitle title={article.title} />
      <ArticleCover
        createdAt={article.createdAt}
        views={article.views}
        category={article.category}
        imageUrl={article.imageUrl}
      />
      <ArticleSubtitle subtitle={article.subtitle} />
      <ArticleBody body={article.body} />
    </Stack>
  );
}

export default ArticleDetail;