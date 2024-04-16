type Recipe = {
  id: string;
  title: string;
  servings: number;
  imageUrl: string;
  ingredients: string[];
  preparation: string;
  createdAt: Date;
  updatedAt: Date;
};

type RecipesApiResponse = {
  recipes: Recipe[];
};
type RecipeCardProps = {
  recipe: Recipe;
  fullWidth: boolean;
};

type RecipeWithScore = Recipe & {score: number};

export type {RecipesApiResponse, RecipeCardProps, Recipe, RecipeWithScore};
