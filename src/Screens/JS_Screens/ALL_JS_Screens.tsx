import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
  Image,
  Linking,
  Button,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Quest from '../Components/Questions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from '../RNScreens/RNScreen';
import {
  LinkingContext,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {QuizzyStyles} from '../../Components/QuizzyStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import JS_Main_Screen from '../../Components/JS_Components/Internal_JS_Screen';
import JS_Fundamentals_Questions from '../../Components/JS_Components/JS_Fundamentals_questions';
import JS_Fundamentals_Quiz_Screen from './JS_Fundamentals_Quiz_Screen';

const Stack = createNativeStackNavigator();

const All_JS_Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="testing" component={TestingScreen} /> */}
      <Stack.Screen name="JS_Main_Screen" component={JS_Main_Screen} />
      {JS_Fundamentals_Questions.map((question, index) => (
        <Stack.Screen
          key={question.id}
          name={`Question${index}`}
          component={JS_Fundamentals_Quiz_Screen}
          initialParams={{
            id: question.id,
            question: question.question,
            options: question.options,
            correctAnswer: question.correctAnswer,
            nextScreen:
              index + 1 < JS_Fundamentals_Questions.length
                ? `Question${index + 1}`
                : null,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    // borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    width: '100%',
    height: 80,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#F6E96B',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderWidth: 1,
  },
  buttonTextStyle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default All_JS_Screens;
