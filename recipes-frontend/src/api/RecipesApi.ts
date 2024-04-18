import axiosInstance from './ApiService';

// Define the function to fetch recipes from the API server using the axios instance created in ApiService.ts
const getRecipes = async () => {
  try {
    const response = await axiosInstance.get('recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes', error);
    throw error;
  }
};

const getRecipeById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by id', error);
    throw error;
  }
};

export {getRecipes, getRecipeById};
