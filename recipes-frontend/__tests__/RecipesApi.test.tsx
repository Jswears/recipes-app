import {getRecipes} from '../src/api/RecipesApi';
import axiosInstance from '../src/api/ApiService';
import {AxiosResponse} from 'axios';
import {RecipesApiResponse} from '../src/types/recipe-types';

// Mock the axiosInstance
jest.mock('../src/api/ApiService');
const mockedAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('getRecipes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test the successful API call
  it('fetches recipes successfully from an API', async () => {
    const mockData: RecipesApiResponse = {
      recipes: [
        {
          id: '1',
          title: 'Pizza',
          servings: 4,
          imageUrl: 'https://example.com/pizza.jpg',
          ingredients: ['Flour', 'Tomato', 'Cheese'],
          preparation: 'Mix and bake',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Pasta',
          servings: 2,
          imageUrl: 'https://example.com/pasta.jpg',
          ingredients: ['Flour', 'Tomato', 'Cheese'],
          preparation: 'Mix and bake',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    };

    mockedAxiosInstance.get.mockResolvedValue({
      data: mockData,
    } as AxiosResponse<RecipesApiResponse>);

    const result = await getRecipes();
    expect(result).toEqual(mockData);
    expect(mockedAxiosInstance.get).toHaveBeenCalledWith('recipes');
  });

  // Test the error handling
  it('throws an error with the correct message when the API call fails', async () => {
    const errorMessage = 'Error fetching recipes';
    mockedAxiosInstance.get.mockRejectedValue(new Error(errorMessage));

    await expect(getRecipes()).rejects.toThrow(new Error(errorMessage));
    expect(mockedAxiosInstance.get).toHaveBeenCalledWith('recipes');
  });

  // Test the 404 error handling
  it('handles 404 not found error correctly', async () => {
    const errorResponse = {response: {status: 404, data: 'Not found'}};
    mockedAxiosInstance.get.mockRejectedValue(errorResponse);

    await expect(getRecipes()).rejects.toEqual(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: 'Not found',
        }),
      }),
    );
    expect(mockedAxiosInstance.get).toHaveBeenCalledWith('recipes');
  });
});
