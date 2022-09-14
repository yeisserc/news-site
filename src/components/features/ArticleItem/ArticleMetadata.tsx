import { Box, Chip, Typography } from "@mui/material";
import IconText from "components/ui/IconText";
import {
  CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import Flex from "components/utils/Flex";
import { dateToString } from "utils/format";

interface ArticleMetadataProps {
  category: string;
  createdAt: Date;
}

const ArticleMetadata = ({ category, createdAt }: ArticleMetadataProps) => {
  return (
    <Flex
      justifyContent="space-between"
    >
      <Chip
        sx={{
          backgroundColor: "primary.light",
          color: "common.white"
        }}
        label={category}
      />
      <IconText icon={<CalendarMonthIcon />} text={<Typography variant="caption">{dateToString(createdAt)}</Typography>} />
    </Flex>
  );
}

export default ArticleMetadata;