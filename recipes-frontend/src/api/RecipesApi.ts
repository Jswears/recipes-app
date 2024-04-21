import axiosInstance from './ApiService';
import mockRecipes from '../apiMocks/mockRecipes.json';

// Define the function to fetch recipes from the API server using the axios instance created in ApiService.ts
// If the environment variable MOCK_API is set to true, return the mockRecipes data
const mockApi = process.env.MOCK_API === 'true';

const getRecipes = async () => {
  try {
    if (mockApi) {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(mockRecipes);
        }, 1000);
      });
    }
    const response = await axiosInstance.get('recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes', error);
    throw error;
  }
};

const getRecipeById = async (id: string) => {
  try {
    if (mockApi) {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(mockRecipes[0]);
        }, 1000);
      });
    }

    const response = await axiosInstance.get(`recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by id', error);
    throw error;
  }
};

export {getRecipes, getRecipeById};
