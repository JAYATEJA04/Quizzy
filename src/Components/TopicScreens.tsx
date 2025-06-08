import React from 'react';
import TopicMainScreen from '../Screens/TopicMainScreen';
import Fluid_Screen from '../Screens/Fluid_Screen';
import DashBoard from '../Screens/ResultsDashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TopicScreens = ({TopicTitle, quizLevels, BASE_URL, quizContent}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={`${TopicTitle} Main Screen`}
        component={TopicMainScreen}
        initialParams={{screenTitle: TopicTitle, baseUrl: BASE_URL}}
      />
      {quizLevels.map((level, index) => (
        <Stack.Screen
          key={index}
          name={`${TopicTitle}${level}QuizScreen`}
          component={Fluid_Screen}
          initialParams={{
            quizQuestions:
              quizContent[level.toLowerCase() as keyof QuizContent],
            QuizTitle: TopicTitle,
            QuizLevel: level,
            baseUrl: BASE_URL,
          }}
          options={{gestureEnabled: false}}
        />
      ))}
      <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        initialParams={{
          QuizTitle: TopicTitle,
          QuizLevel: quizLevels,
          baseUrl: BASE_URL,
        }}
      />
    </Stack.Navigator>
  );
};

export default TopicScreens;
