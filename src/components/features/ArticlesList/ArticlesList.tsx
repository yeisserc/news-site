import { Grid, LinearProgress } from "@mui/material";
import ErrorResult from "components/utils/ErrorResult";
import ArticleItem from "../ArticleItem";
import { Article } from "types/features/Article";
import { useNavigate } from "react-router-dom";
import NoArticles from "./NoArticles";

interface ArticlesListProps {
  articles?: Article[];
  isLoading: boolean;
  isError: boolean;
}

const ArticlesList = ({ articles, isLoading, isError }: ArticlesListProps) => {
  const navigate = useNavigate();
  
  const onReadMoreClick = (id: string): void => {
    navigate(`/articles/${id}`);
  }

  console.log(articles);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <ErrorResult />;
  }

  if(!articles) {
    return <ErrorResult />;
  }

  if(articles.length === 0) {
    return <NoArticles />
  }

  return (
    <Grid container spacing={2}>
      {articles.map(article => (
        <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
          <ArticleItem
            id={article.id}
            thumbnailUrl={article.thumbnailUrl}
            title={article.title}
            category={article.category}
            views={article.views}
            createdAt={article.createdAt}
            onReadMoreClick={onReadMoreClick}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ArticlesList;