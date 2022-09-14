import { useQuery } from "@tanstack/react-query";
import { Category } from "types/features/Category";
import categoriesService from "services/categoriesService";

const useFetchCategory = (id?: string) => {
  const { isLoading, isError, data: category } = useQuery<Category>(
    ['category', id],
    () => categoriesService.getCategoryById(id!),
    {
      refetchOnWindowFocus: false,
      enabled: !!id
    }
  );

  return { isLoading, isError, category };
}

export default useFetchCategory;