import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/recipe-app'),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
