import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {getRecipeById} from '../../api/RecipesApi';
import styles from './styles';
import {Recipe} from '../../types/recipe-types';

const RecipeDetailsScreen = ({route}: {route: any}) => {
  const {recipeId} = route.params;
  const [recipe, setRecipe] = useState<Recipe>();

  const fetchRecipe = async () => {
    try {
      const response = await getRecipeById(recipeId);
      setRecipe(response); // Assuming response directly returns the recipe object
    } catch (error) {
      console.error('Error fetching recipe by id', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: recipe.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.sectionTitle}>Servings</Text>
      <Text style={styles.sectionContent}>{recipe.servings}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.sectionContent}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Preparation</Text>
      <Text style={styles.sectionContent}>{recipe.preparation}</Text>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;
