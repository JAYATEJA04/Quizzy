import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TypeScriptMainScreen from './TypeScriptMainScreen';
import {
  TS_Advance_Quiz_Questions,
  TS_Fundamentals_Quiz_Questions,
  TS_Intermediate_Quiz_Questions,
} from '../../Components/TypeScript_Components/TypeScriptQuizQuestions';
import Fluid_Screen from '../Fluid_Screen';

const Stack = createNativeStackNavigator();

const All_TS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TypeScript main screen"
        component={TypeScriptMainScreen}
      />
      <Stack.Screen
        name="TS_Fundamentals_Quiz_Question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: TS_Fundamentals_Quiz_Questions,
          QuizTitle: 'TypeScript',
        }}
      />
      <Stack.Screen
        name="TS_Intermediate_Quiz_Question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: TS_Intermediate_Quiz_Questions,
          QuizTitle: 'TypeScript',
        }}
      />
      <Stack.Screen
        name="TS_Advance_Quiz_Question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: TS_Advance_Quiz_Questions,
          QuizTitle: 'TypeScript',
        }}
      />
    </Stack.Navigator>
  );
};

export default All_TS_Screens;
