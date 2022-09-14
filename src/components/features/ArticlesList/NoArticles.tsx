import { Typography } from "@mui/material";
import Result from "components/utils/Result";
import emptyListIcon from "assets/images/empty-folder.png";

const NoArticles = () => {
  return (
    <Result>
      <img src={emptyListIcon} alt="No Articles Found" />
      <Typography variant="h5" textAlign="center" color="warning.main" gutterBottom>
        No Articles Found
      </Typography>
    </Result>
  );
}

export default NoArticles;