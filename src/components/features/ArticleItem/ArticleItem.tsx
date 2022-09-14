import { Card, CardMedia, CardContent } from '@mui/material';
import ArticleMetadata from './ArticleMetadata';
import ArticleContent from './ArticleContent';
import ArticleActions from './ArticleActions';

interface ArticleItemProps {
  id: string;
  category: string;
  createdAt: Date;
  thumbnailUrl: string;
  title: string;
  views: number;
  onReadMoreClick: (id: string) => void;
}

const ArticleItem = ({ id, thumbnailUrl, title, category, views, createdAt, onReadMoreClick }: ArticleItemProps) => {

  const handleReadMoreClick = () => {
    onReadMoreClick(id);
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={thumbnailUrl}
        alt="green iguana"
      />
      <CardContent>
        <ArticleMetadata category={category} createdAt={createdAt} />
        <ArticleContent title={title} />
        <ArticleActions views={views} onReadMoreClick={handleReadMoreClick} />
      </CardContent>
    </Card>
  );
}

export default ArticleItem;