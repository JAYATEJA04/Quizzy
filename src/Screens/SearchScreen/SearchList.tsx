/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SearchScreen from './SearchScreen';

const SearchList = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchedItems = [
      {id: 1, name: 'Apple', description: 'A red fruit'},
      {id: 2, name: 'Orange', description: 'A orange fruit'},
      {id: 3, name: 'Banana', description: 'A yellow fruit'},
    ];
    setAllData(fetchedItems);
    setFilteredData(fetchedItems);
  }, []);

  const handleSearch = query => {
    if (query) {
      const lowerCasedQuery = query.toLowerCase();
      const newFilteredData = allData.filter(
        item =>
          item.name.toLowerCase().includes(lowerCasedQuery) ||
          item.description.toLowerCase().includes(lowerCasedQuery),
      );
      setFilteredData(newFilteredData);
    } else {
      setFilteredData(allData);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SearchScreen onSearch={handleSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              borderWidth: 1,
              margin: 10,
            }}>
            <Text style={{color: 'black'}}>{item.name}</Text>
            <Text style={{color: 'black'}}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchList;
