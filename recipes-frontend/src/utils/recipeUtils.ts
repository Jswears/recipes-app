import {Recipe} from '../types/recipeTypes';

const searchRecipesWithRanking = (recipes: Recipe[], query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return recipes
    .map(recipe => {
      let score = 0;
      if (recipe.title.toLowerCase().includes(lowerCaseQuery)) {
        score += 10;
      }
      if (
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(lowerCaseQuery),
        )
      ) {
        score += 5;
      }
      return {...recipe, score};
    })
    .filter(recipe => recipe.score > 0)
    .sort((a, b) => b.score - a.score);
};

export {searchRecipesWithRanking};
