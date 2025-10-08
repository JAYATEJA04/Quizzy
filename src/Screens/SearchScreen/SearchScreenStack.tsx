import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import SearchList from './SearchList';
import ScreensOfTopic from '../ScreensOfTopic';

const Stack = createNativeStackNavigator();

const TemporaryScreen = () => (
  <View>
    <Text>Namaste mallanna kya smart dikhre!</Text>
  </View>
);

const SearchScreenStack = () => {
  const Navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchList} />
      <Stack.Screen name="Temp Screen" component={TemporaryScreen} />
    </Stack.Navigator>
  );
};

export default SearchScreenStack;
