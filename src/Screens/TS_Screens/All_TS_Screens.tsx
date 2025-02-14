import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import TypeScriptMainScreen from './TypeScriptMainScreen';
import {
  TS_Advance_Quiz_Questions,
  TS_Fundamentals_Quiz_Questions,
  TS_Intermediate_Quiz_Questions,
} from '../../Components/TypeScript_Components/TypeScriptQuizQuestions';
import Fluid_Screen from '../Fluid_Screen';

const Stack = createNativeStackNavigator();

const All_TS_Screens = () => {
  const [TS_Quiz_Content, setTS_Quiz_Content] = useState({
    fundamentals: [],
    intermediate: [],
    advanced: [],
  });

  const getTS_Quiz_Content = async () => {
    try {
      const response = await fetch('http://192.168.0.4:3000/quiz/TypeScript');
      if (!response.ok) {
        throw new Error('HTTP error: ' + response.status);
      }

      const data = await response.json();
      setTS_Quiz_Content(data);
      console.log('TS Quiz data fetched!');
    } catch (error) {
      console.error('Error fetching TS quiz data: ' + error);
    }
  };

  useEffect(() => {
    getTS_Quiz_Content();
  }, []);

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
          quizQuestions: TS_Quiz_Content.fundamentals,
          QuizTitle: 'TypeScript',
          QuizLevel: 'Fundamentals',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="TS_Intermediate_Quiz_Question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: TS_Quiz_Content.intermediate,
          QuizTitle: 'TypeScript',
          QuizLevel: 'Intermediate',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
      <Stack.Screen
        name="TS_Advance_Quiz_Question"
        component={Fluid_Screen}
        initialParams={{
          quizQuestions: TS_Quiz_Content.advanced,
          QuizTitle: 'TypeScript',
          QuizLevel: 'Advanced',
          baseUrl: 'http://192.168.0.4:3000',
        }}
      />
    </Stack.Navigator>
  );
};

export default All_TS_Screens;
