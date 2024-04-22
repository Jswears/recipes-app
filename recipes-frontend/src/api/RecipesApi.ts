import axiosInstance from './ApiService';
import mockRecipes from '../apiMocks/mockRecipes.json';
import {MOCK_API} from '@env';

// Check if the MOCK_API flag is set to true
const mockApi = MOCK_API === 'true';

// Fetch the recipes from the API or use the mock data
const getRecipes = async () => {
  console.log(`Mock API is set to: ${mockApi}`); // Log to check the actual value
  try {
    if (mockApi) {
      console.log('Using mock data due to MOCK_API flag');
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(mockRecipes);
        }, 1000);
      });
    }

    console.log('Attempting to fetch recipes from the API');
    const response = await axiosInstance.get('recipes');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes from API, using mockData', error);
    return mockRecipes;
  }
};

// Fetch a recipe by its ID from the API or use the mock data
const getRecipeById = async (id: string) => {
  try {
    if (mockApi) {
      console.log('Using mock data due to MOCK_API flag');
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(mockRecipes[0]);
        }, 1000);
      });
    }

    console.log('Attempting to fetch recipeById from the API');
    const response = await axiosInstance.get(`recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes from API, using mockData', error);
    return mockRecipes;
  }
};

export {getRecipes, getRecipeById};
