import { Grid, LinearProgress } from "@mui/material";
import ErrorResult from "components/utils/ErrorResult";
import CategoryItem from "../CategoryItem/CategoryItem";
import NoCategories from "./NoCategories";
import useFetchCategories from "../../hooks/useFetchCategories";

const CategoriesList = () => {
  const { isLoading, isError, categories } = useFetchCategories();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <ErrorResult />;
  }

  if(!categories || categories.length === 0) {
    return <NoCategories />;
  }

  return (
    <Grid container spacing={2}>
      {categories.map(category => (
        <Grid key={category.id} item xs={12} sm={6} md={4} lg={3}>
          <CategoryItem categoryId={category.id} title={category.title} imageUrl={category.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoriesList;