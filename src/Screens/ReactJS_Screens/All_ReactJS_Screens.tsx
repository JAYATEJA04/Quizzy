import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RJS_screen1 from './RJS_screen1';
import RJS_screen2 from './RJS_screen2';
import RJS_screen3 from './RJS_screen3';
import RJS_screen4 from './RJS_screen4';
import RJS_screen5 from './RJS_screen5';
import RJS_screen6 from './RJS_screen6';
import RJS_screen7 from './RJS_screen7';
import RJS_screen8 from './RJS_screen8';
import RJS_screen9 from './RJS_screen9';
import RJS_screen10 from './RJS_screen10';
import RJS_screen11 from './RJS_screen11';
import ReactJS_Dashboard from './ReactJS_Dashboard';
import ReactJS_MainScreen from './ReactJS_Main_Screen';
import {ReactJS_Fundamentals_Quiz_Questions} from '../../Components/ReactJS_components/ReactJS_Quiz_Questions';
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
    </Stack.Navigator>
  );
};

export default All_ReactJS_Screens;
