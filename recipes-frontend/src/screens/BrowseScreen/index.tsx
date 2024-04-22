import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import mockRecipes from '../../apiMocks/mockRecipes.json';

import RecipeCardComponent from '../../components/RecipeCard/RecipeCardComponent';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent';

import styles from './styles';

import {Recipe} from '../../types/recipeTypes';
import {getRecipes} from '../../api/RecipesApi';
import {searchRecipesWithRanking} from '../../utils/recipeUtils';

const BrowseScreen = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigator = useNavigation();

  // Fetch the recipes from the API and set the state
  const fetchData = async () => {
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes, using mockRecipes', error);
      setRecipes(mockRecipes);
    }
  };

  useEffect(() => {
    fetchData();
  }, [getRecipes]);

  // Filter the recipes based on the search text
  const filteredRecipes = searchRecipesWithRanking(recipes, search);

  // Set the number of columns based on the number of filtered recipes
  const numColumns = filteredRecipes.length === 1 ? 1 : 2;

  // Return the recipes screen with the search bar and recipe cards
  return (
    <>
      <View style={styles.browserContainer}>
        <Text style={styles.browseText}>Browse</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBarComponent setSearch={setSearch} search={search} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={filteredRecipes}
          renderItem={({item}) => (
            <RecipeCardComponent
              recipe={item}
              fullWidth={numColumns === 1}
              navigation={navigator}
            />
          )}
          keyExtractor={item => `${item._id}`}
          numColumns={2}
        />
      </View>
    </>
  );
};

export default BrowseScreen;
