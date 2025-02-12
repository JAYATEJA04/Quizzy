import React, {useEffect, useState} from 'react';
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
  const [JS_Quiz_Content, setJS_Quiz_Content] = useState({
    fundamentals: [],
    intermediate: [],
    advanced: [],
  });

  const getJS_Quiz_Content = async () => {
    try {
      const response = await fetch('http://192.168.0.4:3000/quiz/JavaScript');
      if (!response.ok) {
        throw new Error('HTTP error: ' + response.status);
      }
      const data = await response.json();
      setJS_Quiz_Content(data);
      console.log('JS data loaded successfully!');
    } catch (error) {
      console.error(`Error fetching JS quiz data: ${error}`);
    }
  };

  useEffect(() => {
    getJS_Quiz_Content();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="JS_Main_Screen" component={JS_Main_Screen} />
      <Stack.Screen
        name="JS_Fundamentals_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Quiz_Content.fundamentals,
          QuizTitle: 'JavaScript',
          QuizLevel: 'Fundamentals',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="JS_Intermediate_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Quiz_Content.intermediate,
          QuizTitle: 'JavaScript',
          QuizLevel: 'Intermediate',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="JS_Advance_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: JS_Quiz_Content.advanced,
          QuizTitle: 'JavaScript',
          QuizLevel: 'Advanced',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
    </Stack.Navigator>
  );
};

export default All_JS_Screens;
