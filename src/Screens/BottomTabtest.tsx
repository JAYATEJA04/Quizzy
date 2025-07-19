import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './MainScreen';

const BottomTab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <View>
      <Text style={{color: 'black', fontSize: 25}}>Profile Screen. YAY!</Text>
    </View>
  );
};

const BottomTabTest = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home2" component={MainScreen} />
      <BottomTab.Screen name="Profile Screen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabTest;
