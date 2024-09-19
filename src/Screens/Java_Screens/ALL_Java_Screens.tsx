import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  JAVA_advancedQuestions,
  JAVA_fundamentalsQuestions,
  JAVA_intermediateQuestions,
} from '../../Components/JAVA_Components/JAVA_Questions';
import JAVAMainScreen from './JAVA_Main_Screen';
import Quiz_Screen from '../QuizScreen/QuizScreen';

const Stack = createNativeStackNavigator();

const ALL_JAVA_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ReactJS Main Screen" component={JAVAMainScreen} />
      {JAVA_fundamentalsQuestions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`JAVA_Fundamental_quiz_question_${index}`}
          component={Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            screenName: 'JAVA',
            nextScreen:
              index + 1 < JAVA_fundamentalsQuestions.length
                ? `JAVA_Fundamental_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {JAVA_intermediateQuestions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`JAVA_Intermediate_quiz_question_${index}`}
          component={Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < JAVA_intermediateQuestions.length
                ? `JAVA_Intermediate_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
      {JAVA_advancedQuestions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`JAVA_Advance_quiz_question_${index}`}
          component={Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation,
            referenceLink: question.referenceLink,
            nextScreen:
              index + 1 < JAVA_advancedQuestions.length
                ? `JAVA_Advance_quiz_question_${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ALL_JAVA_Screens;
