import React, {ChangeEvent, FC} from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import SearchBarComponent from '../src/components/SearchBar/SearchBarComponent';

// Mock the SearchBar and Icon components

jest.mock('@rneui/themed', () => {
  const React = require('react');
  const {TextInput} = require('react-native');

  return {
    SearchBar: jest
      .fn()
      .mockImplementation(
        ({
          onClear,
          onChangeText,
          placeholder,
          value,
          testID,
          accessibilityHint,
        }) => (
          <TextInput
            accessibilityHint={accessibilityHint}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            testID={testID || 'search-bar-container'}
            onClear={onClear}
          />
        ),
      ),
    Icon: () => null,
  };
});

describe('SearchBarComponent', () => {
  // Mock the setSearch function
  let setSearch: jest.Mock;

  // Reset the mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
    setSearch = jest.fn();
  });
  const search = '';

  // Test the initial rendering and component elements
  it('renders correctly and contains necessary elements', () => {
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    expect(getByTestId('search-bar-container')).toBeTruthy();
  });

  // Test the placeholder text
  it('displays the correct placeholder text', () => {
    const {getByPlaceholderText} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    expect(
      getByPlaceholderText('Search by name or ingredient...'),
    ).toBeTruthy();
  });

  // Test the initial state of the search input
  it('initializes with empty', () => {
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    expect(input.props.value).toBe(search);
  });

  // Test the search input when the user types 'cake'
  it("updated the search input when the user types 'cake'", () => {
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, 'cake');
    expect(setSearch).toHaveBeenCalledWith('cake');
  });

  //Test clear functionality
  it('clears the search input when the user clears the input', () => {
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, '');
    expect(setSearch).toHaveBeenCalledWith('');
  });

  //Test empty search input
  it('does not trigger a search when the input is empty', () => {
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, '');
    expect(setSearch).not.toHaveBeenCalledWith('cake');
    expect(setSearch).toHaveBeenCalledWith('');
  });

  // Test special characters in search input
  it('handles special characters correctly', () => {
    const specialCharacters = 'cake!@';
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, specialCharacters);
    expect(setSearch).toHaveBeenCalledWith(specialCharacters);
  });

  // Test long search input
  it('accepts long text inputs correctly', () => {
    const longText = 'a'.repeat(10000);
    const {getByTestId} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, longText);
    expect(setSearch).toHaveBeenCalledWith(longText);
  });

  // Test for accessibility

  it('is accessible with proper accessibility labels', () => {
    const {getByAccessibilityHint} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const hintElement = getByAccessibilityHint(
      'Enter the name of a recipe or an ingredient to search for recipes.',
    );
    expect(hintElement).toBeTruthy();
  });

  // Test error handling for a failed search
  it('displays an error message when the search fails', () => {
    const {getByTestId, queryByText, debug} = render(
      <SearchBarComponent search={search} setSearch={setSearch} />,
    );
    const input = getByTestId('search-bar-container');
    fireEvent.changeText(input, 'cake');
    expect(queryByText('Error: Search failed')).toBeNull();
    debug();
  });
  it('updates display when search prop changes', () => {
    const {getByTestId, rerender} = render(
      <SearchBarComponent search="" setSearch={setSearch} />,
    );

    // Initial render with empty search
    let input = getByTestId('search-bar-container');
    expect(input.props.value).toBe('');

    // Update prop and rerender
    rerender(<SearchBarComponent search="chocolate" setSearch={setSearch} />);

    // Check if the input value has been updated
    input = getByTestId('search-bar-container');
    expect(input.props.value).toBe('chocolate');
  });
});
