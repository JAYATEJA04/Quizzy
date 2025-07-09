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
import SampleLogin from './src/Screens/SampleScreen';
import {AuthProvider, useAuth} from './src/Screens/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {session} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!session ? (
        <Stack.Screen name="Sample Login Screen" component={SampleLogin} />
      ) : (
        <Stack.Screen name="Main Screen" component={MainScreen} />
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
            {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
            {/* <Stack.Screen name="Mainscreen" component={MainScreen} /> */}
            {/* {!session ? (
                <>
                  <Stack.Screen
                    name="Sample Login Screen"
                    component={SampleLogin}
                  />
                </>
              ) : (
                <Stack.Screen name="Main Screen" component={MainScreen} />
              )} */}
            {/* <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Sign up screen" component={SignUpScreen} /> */}
            {/* <Stack.Screen
                name="Sample Login Screen"
                component={SampleLogin}
              /> */}
            {/* </Stack.Navigator> */}
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
