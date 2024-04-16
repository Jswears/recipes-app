import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { RecipesService } from '../src/recipes/recipes.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let recipesService: RecipesService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    recipesService = moduleFixture.get<RecipesService>(RecipesService);
  });

  // Test the GET /recipes endpoint to return an array of recipes from the database

  it('/recipes (GET) should return an array of recipes', async () => {
    const mockRecipes = [
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
    ];

    jest
      .spyOn(recipesService, 'getRecipes')
      .mockResolvedValue(mockRecipes as any);

    const response = await request(app.getHttpServer())
      .get('/recipes')
      .expect(200)
      .expect('Content-Type', /json/);

    // Check if it's an array
    expect(Array.isArray(response.body)).toBe(true);

    // Optionally, check if the array is not empty
    expect(response.body.length).toBeGreaterThan(0);

    // Further, you can check for the structure of the data
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('title');
      expect(response.body[0]).toHaveProperty('ingredients');
      expect(response.body[0]).toHaveProperty('preparation');
    }
  });
  it('/recipes (GET) should handle errors', async () => {
    jest
      .spyOn(recipesService, 'getRecipes')
      .mockRejectedValue(new Error('Internal server error'));
    const response = await request(app.getHttpServer())
      .get('/recipes')
      .expect(HttpStatus.INTERNAL_SERVER_ERROR);

    expect(response.body).toEqual({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  });
  afterEach(async () => {
    await app.close();
  });
});
