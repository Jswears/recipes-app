import React from 'react';
import {render} from '@testing-library/react-native';
import RecipeCardComponent from '../src/components/RecipeCard/RecipeCardComponent';
import '@testing-library/jest-native/extend-expect';
describe('RecipeCardComponent', () => {
  const recipe = {
    id: '1',
    title: 'Chocolate Cake',
    servings: 8,
    imageUrl: 'https://example.com/chocolate-cake.jpg',
    ingredients: ['flour', 'sugar', 'cocoa powder'],
    preparation: 'Mix and bake',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Test the rendering of the recipe card
  it('renders the recipe card correctly', () => {
    const {getByText, getByTestId} = render(
      <RecipeCardComponent recipe={recipe} fullWidth={false} />,
    );

    const titleElement = getByText(recipe.title);
    const servingsElement = getByText(recipe.servings.toString());
    const imageElement = getByTestId('recipe-card-image');

    expect(titleElement).toBeTruthy();
    expect(servingsElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
  });

  // Test the rendering of the recipe card with full width
  it('renders the recipe card with full width correctly', () => {
    const {getByTestId} = render(
      <RecipeCardComponent recipe={recipe} fullWidth={true} />,
    );

    const containerElement = getByTestId('recipe-card-container');

    expect(containerElement).toHaveStyle({width: '100%' || '50%'});
  });
});
