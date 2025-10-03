/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../Components/MainScreenComponent';
import {supabase} from '../../lib/supabase';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import MainScreenStack from '../Components/MainScreenComponent';

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

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
      <Text style={{fontSize: 20, color: 'black'}}>Profile Screen</Text>
    </View>
  );
};

const HomeTabIcon = () => (
  <FontAwesomeIcon name="house" size={20} color={'black'} />
);

const renderIcons = (iconname: string) => () => {
  if (iconname === 'Home') {
    return <FontAwesomeIcon name="house" size={24} color={'black'} />;
  } else if (iconname === 'Profile') {
    return <FontAwesomeIcon name="user" size={20} color={'black'} />;
  } else if (iconname === 'Search') {
    return (
      <FontAwesomeIcon name="magnifying-glass" size={20} color={'black'} />
    );
  }
};

const PostAuthenticationScreens = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Home"
        component={MainScreenStack}
        options={{
          tabBarIcon: renderIcons('Home'),
        }}
      />
      <BottomTab.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{tabBarIcon: renderIcons('Search')}}
      />
      <BottomTab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarIcon: renderIcons('Profile'),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default PostAuthenticationScreens;
