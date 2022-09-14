import { Typography } from "@mui/material";

interface ArticleTitleProps {
  title: string;
}

const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <Typography variant="h2">{ title }</Typography>
  );
}

export default ArticleTitle;