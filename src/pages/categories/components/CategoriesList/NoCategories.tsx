import { Typography } from "@mui/material";
import Result from "components/utils/Result";
import emptyListIcon from "assets/images/empty-folder.png";

const NoCategories = () => {
  return (
    <Result>
      <img src={emptyListIcon} alt="Empty List" />
      <Typography variant="h5" textAlign="center" color="warning.main" gutterBottom>
        No categories found
      </Typography>
    </Result>
  );
}

export default NoCategories;