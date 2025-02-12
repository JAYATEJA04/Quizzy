import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactJS_MainScreen from './ReactJS_Main_Screen';
import {
  ReactJS_Fundamentals_Quiz_Questions,
  ReactJS_Intermediate_Quiz_Questions,
  ReactJS_Advance_Quiz_Questions,
} from '../../Components/ReactJS_components/ReactJS_Quiz_Questions';
import Fluid_Screen from '../Fluid_Screen';

const Stack = createNativeStackNavigator();

const All_ReactJS_Screens = () => {
  const [ReactJS_Questions, set_ReactJS_Questions] = useState({
    fundamentals: [],
    intermediate: [],
    advanced: [],
  });

  const getReactJSQuizData = async () => {
    try {
      const response = await fetch('http://192.168.0.4:3000/quiz/ReactJS');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const ReactJS_Data = await response.json();
      set_ReactJS_Questions(ReactJS_Data);
      console.log('hi');
    } catch (error) {
      console.error(`Error fetching quiz data: ${error}`);
    }
  };

  useEffect(() => {
    getReactJSQuizData();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReactJS Main Screen" component={ReactJS_MainScreen} />
      <Stack.Screen
        name="RJS_Fundamentals_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: ReactJS_Questions.fundamentals,
          QuizTitle: 'ReactJS',
          QuizLevel: 'Fundamentals',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="RJS_Intermediate_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: ReactJS_Questions.intermediate,
          QuizTitle: 'ReactJS',
          QuizLevel: 'Intermediate',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="RJS_Advance_quiz_question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: ReactJS_Questions.advanced,
          QuizTitle: 'ReactJS',
          QuizLevel: 'Advanced',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
    </Stack.Navigator>
  );
};

export default All_ReactJS_Screens;
