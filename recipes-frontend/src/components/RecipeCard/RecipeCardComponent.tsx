import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import styles from './styles';

import {RecipeCardProps} from '../../types/recipeTypes';

// Recipe card component to display a recipe card

const RecipeCardComponent = ({
  recipe,
  fullWidth,
  navigation,
}: RecipeCardProps) => {
  const containerStyle = fullWidth
    ? styles.singleCardContainer
    : styles.cardContainer;

  const handlePress = () => {
    navigation.navigate('Recipe Details', {recipeId: recipe._id});
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={handlePress}
      testID="recipe-card-container">
      <View style={containerStyle}>
        <ImageBackground
          testID="recipe-card-image"
          source={{uri: recipe.imageUrl}}
          style={styles.backgroundImage}>
          <View style={styles.overlay} />
          <Text style={styles.cardTitle}>{recipe.title}</Text>
          <Text testID="recipe-card-servings" style={styles.cardServings}>
            Servings: {recipe.servings}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCardComponent;
