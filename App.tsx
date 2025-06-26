/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './redux store/store/store';
import LoginScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="Mainscreen" component={MainScreen} /> */}
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Sign up screen" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
