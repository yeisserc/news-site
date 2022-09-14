import { Typography } from "@mui/material";

interface ArticleSubtitleProps {
  subtitle: string;
}

const ArticleSubtitle = ({ subtitle }: ArticleSubtitleProps) => {
  return (
    <Typography variant="h4">{ subtitle }</Typography>
  );
}

export default ArticleSubtitle;