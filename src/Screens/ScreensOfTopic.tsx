//allRNScreens
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopicMainScreen from './TopicMainScreen';
import Fluid_Screen from './Fluid_Screen';
import DashBoard from './ResultsDashboard2';

const Stack = createNativeStackNavigator();

const ScreensOfTopic = ({route}) => {
  const [quizContent, setQuizContent] = useState({
    fundamentals: [],
    intermediate: [],
    advanced: [],
  });

  const {Topictitle} = route.params;
  console.log(Topictitle);

  const BASE_URL = 'http://192.168.0.3:3000';

  useEffect(() => {
    const getQuizContent = async () => {
      try {
        const response = await fetch(`${BASE_URL}/quiz/${Topictitle}`);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const quizData = await response.json();
        setQuizContent(quizData);
        // console.log(quizData);
        console.log(`${Topictitle} data loaded successfully!`);
      } catch (error) {
        console.error(`Error fetching quiz data: ${error}`);
      }
    };

    getQuizContent();
  }, [Topictitle]);

  const quizLevels = ['Fundamentals', 'Intermediate', 'Advanced'];

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={`${Topictitle} Main Screen`}
        component={TopicMainScreen}
        initialParams={{screenTitle: Topictitle, baseUrl: BASE_URL}}
      />
      {quizLevels.map((level, index) => (
        <Stack.Screen
          key={index}
          name={`${Topictitle}${level}QuizScreen`}
          component={Fluid_Screen}
          initialParams={{
            quizQuestions: quizContent[level.toLowerCase()],
            QuizTitle: Topictitle,
            QuizLevel: level,
            baseUrl: BASE_URL,
          }}
        />
      ))}
      {/* <Stack.Screen name="Dashboard" component={DashBoard} /> */}
    </Stack.Navigator>
  );
};

export default ScreensOfTopic;
