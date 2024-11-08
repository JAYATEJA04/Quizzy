import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from '../../Components/ReactNative_Components/ReactNative_Quiz_Questions';
import RN_Fluid_Screen from './RN_Screen_Fluid';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReactNative Main Screen"
        component={ReactNative_Main_Screen}
      />
      <Stack.Screen
        name="RN_Fundamentals_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{quizQuestions: ReactNative_Fundamentals_Quiz_Questions}}
      />
      <Stack.Screen
        name="RN_Intermediate_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{
          quizQuestions: ReactNative_Intermediate_Topics_Quiz_Questions,
        }}
      />
      <Stack.Screen
        name="RN_Advance_quiz_question"
        component={RN_Fluid_Screen}
        initialParams={{
          quizQuestions: ReactNative_Advance_Topics_Quiz_Questions,
        }}
      />
    </Stack.Navigator>
  );
};

export default AllRNScreens;
