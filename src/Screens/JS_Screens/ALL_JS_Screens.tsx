import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JS_Main_Screen from './JS_Main_Screen';
import Fluid_Screen from '../Fluid_Screen';
import {
  JS_Advance_Quiz_Questions,
  JS_Fundamentals_Quiz_Questions,
  JS_Intermediate_Quiz_Questions,
} from '../../Components/JS_Components/JS_Fundamentals_questions';

const Stack = createNativeStackNavigator();

const All_JS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="JS_Main_Screen" component={JS_Main_Screen} />
      <Stack.Screen
        name="JS_Fundamentals_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Fundamentals_Quiz_Questions,
          QuizTitle: 'JavaScript',
        }}
      />
      <Stack.Screen
        name="JS_Intermediate_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Intermediate_Quiz_Questions,
          QuizTitle: 'JavaScript',
        }}
      />
      <Stack.Screen
        name="JS_Advance_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Advance_Quiz_Questions,
          QuizTitle: 'JavaScript',
        }}
      />
    </Stack.Navigator>
  );
};

export default All_JS_Screens;
