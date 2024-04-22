// src/recipes/seeder.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from '../schemas/Recipe.schema';
import mockRecipesData from 'src/mockData/mockRecipes';

@Injectable()
export class SeederService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async seedDatabase() {
    console.log('Checking existing recipes in the database...');
    const count = await this.recipeModel.countDocuments();
    console.log(`Found ${count} recipes.`);

    if (count === 0) {
      console.log('No recipes found, seeding data...');
      try {
        await this.recipeModel.insertMany(mockRecipesData);
        console.log('Database seeded successfully with sample recipes!');
      } catch (error) {
        console.error('Error seeding database:', error);
      }
    } else {
      console.log(
        'Database already contains recipes, not seeding additional data.',
      );
      const sampleRecipe = await this.recipeModel.findOne().exec();
      console.log('Sample recipe from database:', sampleRecipe);
    }
  }
}
