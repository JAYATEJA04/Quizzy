import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactJS_MainScreen from './ReactJS_Main_Screen';
import {
  ReactJS_Fundamentals_Quiz_Questions,
  ReactJS_Intermediate_Quiz_Questions,
  ReactJS_Advance_Quiz_Questions,
} from '../../Components/ReactJS_components/ReactJS_Quiz_Questions';
import ReactJS_Quiz_Screen from './ReactJS_Quiz_Screen';

const Stack = createNativeStackNavigator();

const All_ReactJS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReactJS Main Screen" component={ReactJS_MainScreen} />
      {ReactJS_Fundamentals_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Fundamental_quiz_question_${index}`}
          component={ReactJS_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactJS_Fundamentals_Quiz_Questions.length
                ? `Fundamental_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactJS_Intermediate_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Intermediate_quiz_question_${index}`}
          component={ReactJS_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactJS_Fundamentals_Quiz_Questions.length
                ? `Intermediate_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactJS_Advance_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Advance_quiz_question_${index}`}
          component={ReactJS_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < ReactJS_Advance_Quiz_Questions.length
                ? `Advance_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default All_ReactJS_Screens;
