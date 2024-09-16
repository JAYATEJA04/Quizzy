import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TypeScriptMainScreen from './TypeScriptMainScreen';
import {
  TS_Advance_Quiz_Questions,
  TS_Fundamentals_Quiz_Questions,
  TS_GearUp_Quiz_Questions,
} from '../../Components/TypeScript_Components/TypeScriptQuizQuestions';
import TypeScript_Quiz_screen from './TS_Quiz_Screen';

const Stack = createNativeStackNavigator();

const All_TS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TypeScript main screen"
        component={TypeScriptMainScreen}
      />
      {TS_Fundamentals_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`TS_Fundamental_quiz_question_${index}`}
          component={TypeScript_Quiz_screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < TS_Fundamentals_Quiz_Questions.length
                ? `TS_Fundamental_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {TS_GearUp_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`TS_GearUp_quiz_question_${index}`}
          component={TypeScript_Quiz_screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < TS_GearUp_Quiz_Questions.length
                ? `TS_GearUp_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {TS_Advance_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`TS_Advance_quiz_question_${index}`}
          component={TypeScript_Quiz_screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < TS_Advance_Quiz_Questions.length
                ? `TS_GearUp_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default All_TS_Screens;
