import { Typography } from '@mui/material';

interface ArticleBodyProps {
  body: string;
}

const ArticleBody = ({ body }: ArticleBodyProps) => {
  return (
    <Typography variant="body1">{ body }</Typography>
  );
}

export default ArticleBody;