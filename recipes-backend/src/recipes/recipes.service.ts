import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from '../schemas/Recipe.schema';
import { CreateRecipeDto } from './dto/recipe.dto';

@Injectable()
export class RecipesService {
  @InjectModel(Recipe.name) private recipeModel: Model<Recipe>;
  createRecipe(createRecipeDto: CreateRecipeDto) {
    const newRecipe = new this.recipeModel(createRecipeDto);
    return newRecipe.save();
  }
  async getRecipes() {
    try {
      return this.recipeModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve recipes');
    }
  }
  async getRecipeById(id: string) {
    try {
      const recipe = await this.recipeModel.findById(id).exec();
      if (!recipe) {
        throw new InternalServerErrorException('Recipe not found');
      }
      return recipe;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve recipe');
    }
  }
}
