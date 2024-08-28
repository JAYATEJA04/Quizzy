import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative_Main_Screen from './RN_Main_Screen';
import ReactNative_Fundamentals_Questions from '../../Components/ReactNative_Components/ReactNative_Fundamentals_Questions';
import RN_FundamentalsQuizScreen from './RN_Fundamentals_Quiz_Screen';

const Stack = createNativeStackNavigator();

const AllRNScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ReactNative Main Screen"
        component={ReactNative_Main_Screen}
      />
      {ReactNative_Fundamentals_Questions.map((question, index) => (
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
              index + 1 < ReactNative_Fundamentals_Questions.length
                ? `Question${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AllRNScreens;
