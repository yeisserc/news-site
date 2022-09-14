import { Stack } from "@mui/material";
import IconText from "components/ui/IconText";
import {
  RssFeed as RssFeedIcon,
  Visibility as VisibilityIcon,
  CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import { dateToString } from "utils/format";

interface ArticleCoverProps {
  createdAt: Date;
  views: number;
  category: string;
  imageUrl: string;
}

const ArticleCover = ({ createdAt, views, category, imageUrl }: ArticleCoverProps) => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <IconText icon={<CalendarMonthIcon />} text={dateToString(createdAt)} />
        <IconText icon={<VisibilityIcon />} text={views.toString()} />
        <IconText icon={<RssFeedIcon />} text={category} />
      </Stack>
      <img src={imageUrl} alt={`Article cover`} />
    </Stack>
  );
}

export default ArticleCover;