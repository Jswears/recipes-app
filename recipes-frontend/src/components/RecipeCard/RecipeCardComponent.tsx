import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';

import {RecipeCardProps} from '../../types/recipe-types';

// Recipe card component to display a recipe card

const RecipeCardComponent = ({recipe, fullWidth}: RecipeCardProps) => {
  const containerStyle = fullWidth
    ? styles.singleCardContainer
    : styles.cardContainer;
  return (
    <View style={containerStyle} testID="recipe-card-container">
      <ImageBackground
        testID="recipe-card-image"
        source={{uri: recipe.imageUrl}}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <Text style={styles.cardTitle}>{recipe.title}</Text>
        <Text style={styles.cardServings}>{recipe.servings}</Text>
      </ImageBackground>
    </View>
  );
};

export default RecipeCardComponent;
