import React from 'react';
import {render} from '@testing-library/react-native';
import RecipeCardComponent from '../src/components/RecipeCard/RecipeCardComponent';
import '@testing-library/jest-native/extend-expect';

describe('RecipeCardComponent', () => {
  const navigator = {
    navigate: jest.fn(),
  };

  const recipe = {
    _id: '1',
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
      <RecipeCardComponent
        recipe={recipe}
        fullWidth={false}
        navigation={navigator}
      />,
    );

    const titleElement = getByText(recipe.title);
    const servingsElement = getByTestId('recipe-card-servings');
    const imageElement = getByTestId('recipe-card-image');

    expect(titleElement.props.children).toEqual(recipe.title);
    expect(servingsElement.props.children[1]).toEqual(recipe.servings);
    expect(imageElement.props.source.uri).toEqual(recipe.imageUrl);
  });

  // Test the rendering of the recipe card with full width
  it('renders the recipe card with full width correctly', () => {
    const {getByTestId} = render(
      <RecipeCardComponent
        recipe={recipe}
        fullWidth={true}
        navigation={navigator}
      />,
    );

    const containerElement = getByTestId('recipe-card-container');

    expect(containerElement).toHaveStyle({width: '100%' || '50%'});
  });
});
