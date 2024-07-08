import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RJS_screen1 from './RJS_screen1';
import RJS_screen2 from './RJS_screen2';
import RJS_screen3 from './RJS_screen3';
import RJS_screen4 from './RJS_screen4';
import RJS_screen5 from './RJS_screen5';
import RJS_screen6 from './RJS_screen6';
import RJS_screen7 from './RJS_screen7';
import RJS_screen8 from './RJS_screen8';
import RJS_screen9 from './RJS_screen9';
import RJS_screen10 from './RJS_screen10';
import RJS_screen11 from './RJS_screen11';
import ReactJS_Dashboard from './ReactJS_Dashboard';

const Stack = createNativeStackNavigator();

const All_ReactJS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RJS screen 1" component={RJS_screen1} />
      <Stack.Screen name="RJS screen 2" component={RJS_screen2} />
      <Stack.Screen name="RJS screen 3" component={RJS_screen3} />
      <Stack.Screen name="RJS screen 4" component={RJS_screen4} />
      <Stack.Screen name="RJS screen 5" component={RJS_screen5} />
      <Stack.Screen name="RJS screen 6" component={RJS_screen6} />
      <Stack.Screen name="RJS screen 7" component={RJS_screen7} />
      <Stack.Screen name="RJS screen 8" component={RJS_screen8} />
      <Stack.Screen name="RJS screen 9" component={RJS_screen9} />
      <Stack.Screen name="RJS screen 10" component={RJS_screen10} />
      <Stack.Screen name="RJS screen 11" component={RJS_screen11} />
      <Stack.Screen name="ReactJS Dashboard" component={ReactJS_Dashboard} />
    </Stack.Navigator>
  );
};

export default All_ReactJS_Screens;
