import { Typography } from '@mui/material';
import Result from 'components/utils/Result';
import emptyListIcon from "assets/images/empty-folder.png";

const NoArticle = () => {
  return (
    <Result>
      <img src={emptyListIcon} alt="Article not found" />
      <Typography variant="h5" textAlign="center" color="warning.main" gutterBottom>
        Article not found
      </Typography>
    </Result>
  );
}

export default NoArticle