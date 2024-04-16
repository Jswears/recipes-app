import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  servings: number;
  imageUrl: string;

  @IsNotEmpty()
  @IsString({ each: true })
  ingredients: string[];

  @IsNotEmpty()
  @IsString()
  preparation: string;
}
