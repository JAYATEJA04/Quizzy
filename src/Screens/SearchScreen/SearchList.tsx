/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchScreen from './SearchScreen';
import {useNavigation} from '@react-navigation/native';

const SearchList = () => {
  const Navigation = useNavigation();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [isThereASearch, setThereIsASearch] = useState();

  useEffect(() => {
    const fetchedItems = [
      {id: 1, name: 'React Native', description: 'A red fruit'},
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
      <Text style={{color: 'black'}}>Query not found!</Text>;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchScreen onSearch={handleSearch} />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Navigation.navigate('Temp Screen')}
              style={{
                backgroundColor: 'white',
                padding: 10,
                // borderWidth: 1,
                elevation: 3,
                borderRadius: 8,
                margin: 10,
              }}>
              <Text style={{color: 'black'}}>{item.name}</Text>
              <Text style={{color: 'black'}}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchList;
