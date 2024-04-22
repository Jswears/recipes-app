import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema, Recipe } from '../schemas/Recipe.schema';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  providers: [RecipesService, SeederService],
  controllers: [RecipesController],
})
export class RecipesModule {}
