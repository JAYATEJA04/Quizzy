import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizzyMainScreen from './QuizzyMainScreen';
import ScreensOfTopic from './ScreensOfTopic';
import {Button} from 'react-native';
import {supabase} from '../../lib/supabase';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const topicScreenNames = [
  {name: 'ReactNativeScreen', title: 'ReactNative'},
  {name: 'ReactJSScreen', title: 'React'},
  {name: 'JavaScriptScreen', title: 'JavaScript'},
  {name: 'TypeScriptScreen', title: 'TypeScript'},
  {name: 'JAVAScreen', title: 'JAVA'},
  {name: 'NodeJSScreen', title: 'NodeJS'},
];

const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">
        {() => <QuizzyMainScreen title="Quizzy" screens={topicScreenNames} />}
      </Stack.Screen>
      {topicScreenNames.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={ScreensOfTopic}
          options={{gestureEnabled: false}}
          initialParams={{
            Topictitle: screen.title,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainScreen;
