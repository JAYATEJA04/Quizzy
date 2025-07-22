/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './MainScreen';
import {supabase} from '../../lib/supabase';

const BottomTab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <View>
      <Text style={{color: 'black', fontSize: 25}}>Profile Screen. YAY!</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '80%',
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: 8,
            elevation: 5,
          }}
          onPress={() => supabase.auth.signOut()}>
          <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
            Log out!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BottomTabTest = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Home2" component={MainScreen} />
      <BottomTab.Screen name="Profile Screen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabTest;
