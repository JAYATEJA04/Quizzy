import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from '../../Components/ReactNative_Components/ReactNative_Quiz_Questions';
import RN_Fluid_Screen from '../Fluid_Screen';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  const [questions, setQuestions] = useState([]);

  const getReactNativeQuizData = async () => {
    try {
      const response = await fetch(
        'http://192.168.0.5:3000/quiz/ReactNative/Fundamentals',
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    } catch (error) {
      console.error(`Error fetching quiz data: ${error}`);
    }
  };

  useEffect(() => {
    getReactNativeQuizData();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReactNative Main Screen"
        component={ReactNative_Main_Screen}
      />
      <Stack.Screen
        name="RN_Fundamentals_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{
          // quizQuestions: ReactNative_Fundamentals_Quiz_Questions,
          quizQuestions: questions,
          QuizTitle: 'React Native',
        }}
      />
      <Stack.Screen
        name="RN_Intermediate_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{
          quizQuestions: ReactNative_Intermediate_Topics_Quiz_Questions,
          QuizTitle: 'React Native',
        }}
      />
      <Stack.Screen
        name="RN_Advance_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{
          quizQuestions: ReactNative_Advance_Topics_Quiz_Questions,
          QuizTitle: 'React Native',
        }}
      />
    </Stack.Navigator>
  );
};

export default AllRNScreens;
