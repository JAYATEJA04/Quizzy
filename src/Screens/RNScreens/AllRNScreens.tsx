import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from '../../Components/ReactNative_Components/ReactNative_Quiz_Questions';
import RN_Quiz_Screen from './RN_Quiz_Screen';
import RN_Fluid_Screen from './RN_Screen_Fluid';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReactNative Main Screen"
        component={ReactNative_Main_Screen}
      />
      <Stack.Screen name="RN Fluid Screen" component={RN_Fluid_Screen} />
      {ReactNative_Fundamentals_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`RN_Fundamentals_quiz_question${index}`}
          component={RN_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactNative_Fundamentals_Quiz_Questions.length
                ? `RN_Fundamentals_quiz_question${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactNative_Intermediate_Topics_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`RN_Intermediate_quiz_question${index}`}
          component={RN_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactNative_Intermediate_Topics_Quiz_Questions.length
                ? `RN_Intermediate_quiz_question${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactNative_Advance_Topics_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`RN_Advance_quiz_question${index}`}
          component={RN_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactNative_Advance_Topics_Quiz_Questions.length
                ? `RN_Advance_quiz_question${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AllRNScreens;
