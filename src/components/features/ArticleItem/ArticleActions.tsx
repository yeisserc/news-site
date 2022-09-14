import { Box, Button, Typography } from "@mui/material";
import IconText from "components/ui/IconText";
import Flex from "components/utils/Flex";
import {
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

interface ArticleActionsProps {
  views: number;
  onReadMoreClick: () => void;
}

const ArticleActions = ({ views, onReadMoreClick }: ArticleActionsProps) => {
  return (
    <Flex
      justifyContent="space-between"
      sx={{ mt: 2 }}
    >
      <Button
        variant="outlined"
        onClick={onReadMoreClick}
        color="primary">
          Read More
      </Button>
      <IconText
        icon={<VisibilityIcon />}
        text={<Typography variant="caption">{ views }</Typography>}
      />
    </Flex>
  );
}

export default ArticleActions;