import React from 'react';
import {Button} from 'react-native';

// Home screen component to display the home screen and navigate to the recipes screen
const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <Button title="Recipes" onPress={() => navigation.navigate('Recipes')} />
  );
};

export default HomeScreen;
