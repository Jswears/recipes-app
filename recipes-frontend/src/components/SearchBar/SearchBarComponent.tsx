import React from 'react';
import {View} from 'react-native';
import {SearchBar, Icon} from '@rneui/themed';

import styles from './styles';

import {SearchBarComponentProps} from './types';

export const SearchBarComponent: React.FunctionComponent<
  SearchBarComponentProps
> = ({setSearch, search}) => {
  const updateSearch = (search: React.SetStateAction<string>) => {
    setSearch(search);
  };

  // Return the search bar component with the specified styles and props
  return (
    <View style={styles.view}>
      <SearchBar
        accessibilityLabel="Search by name or ingredient"
        accessibilityHint="Enter the name of a recipe or an ingredient to search for recipes."
        testID="search-bar-container"
        placeholder="Search by name or ingredient..."
        onChangeText={updateSearch}
        onClear={() => setSearch('')}
        lightTheme
        round
        searchIcon={<Icon name="search" size={24} color="black" />}
        autoCorrect={false}
        value={search}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        leftIconContainerStyle={styles.leftIconContainer}
        rightIconContainerStyle={styles.rightIconContainer}
        inputStyle={styles.input}
      />
    </View>
  );
};

export default SearchBarComponent;
