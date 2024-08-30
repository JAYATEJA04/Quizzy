import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
  ReactNative_Advance_Topics_Quiz_Questions,
} from '../../Components/ReactNative_Components/ReactNative_Quiz_Questions';
import RN_Quiz_Screen from './RN_Quiz_Screen';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReactNative Main Screen"
        component={ReactNative_Main_Screen}
      />
      {ReactNative_Fundamentals_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Question${index}`}
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
                ? `Question${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactNative_Intermediate_Topics_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Mid_Question${index}`}
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
                ? `Mid_Question${index + 1}`
                : null,
          }}
        />
      ))}
      {ReactNative_Advance_Topics_Quiz_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`AdvanceQuestion${index}`}
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
                ? `AdvanceQuestion${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AllRNScreens;
