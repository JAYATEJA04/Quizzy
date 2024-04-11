import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
  Platform,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from './RNScreen';
import RNScreen2 from './RNScreen2';
import RNScreen3 from './RNScreen3';
import RNScreen4 from './RNScreen4';
import RNScreen5 from './RNScreen5';
import RNScreen6 from './RNScreen6';
import RNScreen7 from './RNScreen7';
import RNScreen8 from './RNScreen8';
import RNScreen9 from './RNScreen9';
import RNScreen10 from './RNScreen10';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen 1" component={RNScreen} />
      <Stack.Screen name="Screen 2" component={RNScreen2} />
      <Stack.Screen name="Screen 3" component={RNScreen3} />
      <Stack.Screen name="Screen 4" component={RNScreen4} />
      <Stack.Screen name="Screen 5" component={RNScreen5} />
      <Stack.Screen name="Screen 6" component={RNScreen6} />
      <Stack.Screen name="Screen 7" component={RNScreen7} />
      <Stack.Screen name="Screen 8" component={RNScreen8} />
      <Stack.Screen name="Screen 9" component={RNScreen9} />
      <Stack.Screen name="Screen 10" component={RNScreen10} />
    </Stack.Navigator>
  );
};

export default AllRNScreens;
