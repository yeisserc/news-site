import { Category } from "types/features/Category";
import api from "./axios";

const categoriesService = {
  getCategories: async function (): Promise<Category[]> {
    const { data } = await api.get(`/categories`);
    
    return data;
  },

  getCategoryById: async function (id: string): Promise<Category> {
    const { data } = await api.get(`/categories/${id}`);
    
    return data;
  }
};

export default categoriesService;