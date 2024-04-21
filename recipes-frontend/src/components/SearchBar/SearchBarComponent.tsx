import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SearchBar, Icon} from '@rneui/themed';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faXmark} from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

import {SearchBarComponentProps} from '../../types/searchbarTypes';

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
        onClear={() => {
          setSearch('');
        }}
        searchIcon={
          <TouchableOpacity>
            <FontAwesomeIcon icon={faSearch} size={20} color="#888" />
          </TouchableOpacity>
        }
        clearIcon={
          <TouchableOpacity onPress={() => setSearch('')}>
            <FontAwesomeIcon icon={faXmark} size={20} color="#888" />
          </TouchableOpacity>
        }
        autoCorrect={false}
        value={search}
        placeholderTextColor={'#888'}
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
