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
import {AuthProvider, useAuth} from './src/Screens/AuthContext';
import AuthenticationScreens from './src/Screens/AuthScreen';
import PostAuthenticationScreens from './src/Screens/PostAuthenticationScreens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {session} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!session ? (
        <Stack.Screen
          name="Authentication Screens"
          component={AuthenticationScreens}
        />
      ) : (
        <Stack.Screen
          name="Post Authentication Screen"
          component={PostAuthenticationScreens}
        />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
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
