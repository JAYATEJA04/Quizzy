import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizzyMainScreen from '../Screens/QuizzyMainScreen';
import ScreensOfTopic from '../Screens/ScreensOfTopic';
import {Button} from 'react-native';
import {supabase} from '../../lib/supabase';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchList from '../Screens/SearchScreen/SearchList';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const topicScreenNames = [
  {name: 'ReactNativeScreen', title: 'ReactNative'},
  {name: 'ReactJSScreen', title: 'React'},
  {name: 'JavaScriptScreen', title: 'JavaScript'},
  {name: 'TypeScriptScreen', title: 'TypeScript'},
  {name: 'JAVAScreen', title: 'Java'},
  {name: 'NodeJSScreen', title: 'NodeJS'},
];

const MainScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="QuizzyMainScreen">
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

export default MainScreenStack;
