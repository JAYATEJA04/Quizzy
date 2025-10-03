/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';

const SearchScreen = ({onSearch}) => {
  const [searchText, setSearchText] = useState();

  const handleSearchChange = text => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      <View style={{}}>
        <TextInput
          value={searchText}
          onChangeText={handleSearchChange}
          placeholder="Search here"
          placeholderTextColor={'black'}
          style={{
            borderWidth: 0.4,
            borderRadius: 8,
            fontFamily: 'Roboto-Italic',
            color: 'black',
          }}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
