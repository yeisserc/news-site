import { Box, Typography } from "@mui/material";

interface ArticleContentProps {
  title: string;
}

const ArticleContent = ({ title }: ArticleContentProps) => {
  return (
    <Box mt={1}>
      <Typography gutterBottom variant="subtitle1">
        {title}
      </Typography>
    </Box>
  );
}

export default ArticleContent;