/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CountAnswers} from './src/Components/CountContext';
import {ReactJSCountAnswers} from './src/Components/ReactJS_components/ReactJS_CountContext';

const Stack = createNativeStackNavigator();

const RNScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>Hello RN</Text>
    </View>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView>
      <CountAnswers>
        <ReactJSCountAnswers>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Mainscreen" component={MainScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ReactJSCountAnswers>
      </CountAnswers>
    </GestureHandlerRootView>
  );
};

export default App;
