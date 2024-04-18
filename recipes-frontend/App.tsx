/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import RecipeDetailsScreen from './src/screens/RecipesDetailsScreen';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Recipes" component={BrowseScreen} />
        <Screen name="Recipe Details" component={RecipeDetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
