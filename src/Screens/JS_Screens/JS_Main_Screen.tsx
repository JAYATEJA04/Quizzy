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
import RNScreen from './RNScreens/RNScreen';
import {
  LinkingContext,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {QuizzyStyles} from '../Components/QuizzyStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import JS_Fundamentals_Questions from '../../Components/JS_Components/JS_Fundamentals_questions';
const Stack = createNativeStackNavigator();

const JS_Main_Screen = () => {
  const Navigation = useNavigation();

  const handleFundmentalsQuizButton = () => {
    const firstQuestionScreen = 'Question0'; // Replace with your logic
    Navigation.navigate(firstQuestionScreen);
  };

  const JavaScript_Quiz_Content = [
    {
      level: 'Fundamentals',
      intro:
        'Start here to learn the essentials of JavaScript, focusing on basic syntax, data types, and core concepts.',
      QuizButtonText: "Let's get started!",
      ScreenName: 'JS_Fundamentals_quiz_question',
      topics: [
        {
          title: 'Variables & Data Types',
          description: 'Understand how to store and manipulate data.',
        },
        {
          title: 'Functions',
          description: 'Learn how to write reusable blocks of code.',
        },
        {
          title: 'Conditionals',
          description:
            'Control the flow of your program with if-else statements.',
        },
        {title: 'Loops', description: 'Execute repetitive tasks efficiently.'},
        {
          title: 'Basic DOM Manipulation',
          description: 'Interact with web pages dynamically.',
        },
      ],
    },
    {
      level: 'Intermediate',
      intro:
        'Build on your knowledge by learning about more complex data structures, debugging, and modularity.',
      QuizButtonText: "Let's gear up!",
      ScreenName: 'JS_Intermediate_quiz_question',
      topics: [
        {
          title: 'Arrays & Objects',
          description: 'Work with collections of data.',
        },
        {
          title: 'ES6+ Features',
          description:
            'Use modern syntax like arrow functions and destructuring.',
        },
        {
          title: 'Modules',
          description: 'Organize your code into reusable pieces.',
        },
        {
          title: 'Debugging',
          description: 'Learn techniques to find and fix bugs in your code.',
        },
        {title: 'Events', description: 'Handle user interactions effectively.'},
      ],
    },
    {
      level: 'Advanced',
      intro:
        'Tackle advanced concepts like asynchronous programming, closures, and performance optimization.',
      QuizButtonText: "Let's go!",
      ScreenName: 'JS_Advance_quiz_question',
      topics: [
        {
          title: 'Promises & Async/Await',
          description: 'Handle asynchronous tasks gracefully.',
        },
        {
          title: 'Closures',
          description:
            'Understand how functions can retain access to outer variables.',
        },
        {
          title: 'Prototype & Inheritance',
          description: "Dive into JavaScript's object-oriented features.",
        },
        {
          title: 'Performance Optimization',
          description: 'Write efficient, high-performance code.',
        },
        {
          title: 'Design Patterns',
          description: 'Apply proven solutions to common problems.',
        },
      ],
    },
  ];

  return (
    <View style={JS_Main_Screen_Styles.Container}>
      <View style={JS_Main_Screen_Styles.TitleViewContainer}>
        <Text style={JS_Main_Screen_Styles.screenTitleText}>JavaScript</Text>
      </View>
      <ScrollView style={JS_Main_Screen_Styles.ScrollViewStyle}>
        <View style={JS_Main_Screen_Styles.IntroductionView}>
          <Text style={JS_Main_Screen_Styles.IntroductionTextStyle}>
            This section is designed to help you strengthen your knowledge of
            React Native and mobile app development. You’ll start with the
            fundamentals—learning about components, JSX, and basic styling to
            build simple UIs. As you progress, you’ll dive into state
            management, props, and navigation, understanding how to create
            interactive and dynamic app experiences. Finally, in the advanced
            topics, you’ll tackle animations, performance optimization, and
            integrating native modules, gaining the skills to build
            high-quality, production-ready apps.
          </Text>
        </View>
        <View>
          {JavaScript_Quiz_Content.map((level, index) => (
            <View key={index} style={JS_Main_Screen_Styles.LevelViewContainer}>
              <View style={JS_Main_Screen_Styles.SubTopicTitleView}>
                <Text style={JS_Main_Screen_Styles.SubTopicTitleText}>
                  {level.level}
                </Text>
                <View style={JS_Main_Screen_Styles.ThinLineView}>
                  <Text style={JS_Main_Screen_Styles.ThinLine} />
                </View>
              </View>
              <View style={JS_Main_Screen_Styles.IntroductionView}>
                <Text style={JS_Main_Screen_Styles.IntroductionTextStyle}>
                  {level.intro}
                </Text>
              </View>
              {level.topics.map((topic, topicIndex) => (
                <View
                  key={topicIndex}
                  style={JS_Main_Screen_Styles.BulletPointView}>
                  <Text style={JS_Main_Screen_Styles.BulletPointText}>
                    •{' '}
                    <Text
                      style={JS_Main_Screen_Styles.BulletPointHighlightedText}>
                      {topic.title}:
                    </Text>{' '}
                    {topic.description}
                  </Text>
                </View>
              ))}
              <View style={JS_Main_Screen_Styles.StartTheQuizButtonView}>
                <TouchableOpacity
                  style={JS_Main_Screen_Styles.StartTheQuizButton}
                  onPress={() => Navigation.navigate(`${level.ScreenName}`)}>
                  <Text style={JS_Main_Screen_Styles.StartTheQuizButtonText}>
                    {level.QuizButtonText}{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#D7BC39'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const JS_Main_Screen_Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  TitleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 24,
    color: '#D7BC39',
    fontFamily: 'Montserrat-Bold',
  },
  ScrollViewStyle: {
    flex: 1,
  },
  scroll_view_contentcontainer: {
    paddingTop: 20,
    padding: 5,
  },
  IntroductionTextStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  LevelViewContainer: {
    flexDirection: 'column',
  },
  SubTopicTitleView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  SubTopicTitleText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  IntroductionView: {
    marginTop: 10,
  },
  ThinLineView: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ThinLine: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
  },
  BulletPointView: {
    marginLeft: 10,
  },
  BulletPointText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  BulletPointHighlightedText: {
    fontWeight: 'bold',
  },
  StartTheQuizButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  StartTheQuizButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  StartTheQuizButtonText: {
    color: '#D7BC39',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});

export default JS_Main_Screen;
