import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CategoryItemProps {
  categoryId: number;
  imageUrl: string;
  title: string;
}

const CategoryItem = ({ categoryId, imageUrl, title }: CategoryItemProps) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`${title.toLowerCase()}`);
  }

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={imageUrl}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            { title }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryItem;