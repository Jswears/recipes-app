import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import styles from './styles';

// Home screen component to display the home screen and navigate to the recipes screen
const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Recipes"
        onPress={() => navigation.navigate('Recipes')}
        color="#FFA500"
      />
    </View>
  );
};

export default HomeScreen;
