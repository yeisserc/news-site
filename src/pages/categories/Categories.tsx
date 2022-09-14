import CategoriesList from "./components/CategoriesList";
import { Box } from '@mui/material';
import PageTitle from "components/ui/PageTitle";

const Categories = () => {
  return (
    <Box>
      <PageTitle>Categories</PageTitle>
      <CategoriesList />
    </Box>
  )
}

export default Categories;