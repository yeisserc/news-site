import { useQuery } from "@tanstack/react-query";
import { Category } from "types/features/Category";
import categoriesService from "services/categoriesService";

const useFetchCategories = () => {
  const { isLoading, isError, data: categories } = useQuery<Category[]>(
    ['categories'],
    () => categoriesService.getCategories(),
    {
      refetchOnWindowFocus: false
    }
  );

  return { isLoading, isError, categories };
}

export default useFetchCategories;