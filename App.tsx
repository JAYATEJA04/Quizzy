/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './redux store/store/store';
import SampleLogin from './src/Screens/AuthScreen';
import {AuthProvider, useAuth} from './src/Screens/AuthContext';
import BottomTabTest from './src/Screens/BottomTabtest';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {session} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!session ? (
        <Stack.Screen name="Authentication Screens" component={SampleLogin} />
      ) : (
        // <Stack.Screen name="Sample Login Screen" component={LoginScreen} />
        <Stack.Screen name="Main Screen" component={BottomTabTest} />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  // const {session} = useAuth();
  // console.log(session);

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
