import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Recipe {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  servings: number;
  @Prop({ required: true })
  imageUrl: string;
  @Prop({ required: true })
  ingredients: string[];
  @Prop({ required: true })
  preparation: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
