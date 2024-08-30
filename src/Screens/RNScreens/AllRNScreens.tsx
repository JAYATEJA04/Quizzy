import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import {
  ReactNative_Fundamentals_Quiz_Questions,
  ReactNative_Intermediate_Topics_Quiz_Questions,
} from '../../Components/ReactNative_Components/ReactNative_Quiz_Questions';
import RN_FundamentalsQuizScreen from './RN_Fundamentals_Quiz_Screen';
import RN_MidLevel_quiz from './RN_IntermediateTopics_Quiz';

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
          component={RN_FundamentalsQuizScreen}
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
          component={RN_MidLevel_quiz}
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
    </Stack.Navigator>
  );
};

export default AllRNScreens;
