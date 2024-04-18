import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    console.log(createRecipeDto);
    return this.recipesService.createRecipe(createRecipeDto);
  }
  @Get()
  async getRecipes() {
    try {
      console.log('Fetching recipes');
      return this.recipesService.getRecipes();
    } catch (error) {
      throw new HttpException(
        'Unable to fetch recipes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get(':id')
  async getRecipeById(@Param('id') id: string) {
    try {
      return await this.recipesService.getRecipeById(id);
    } catch (error) {
      throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
    }
  }
}
