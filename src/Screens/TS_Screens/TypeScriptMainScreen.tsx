import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const TypeScriptMainScreen = () => {
  const Navigation = useNavigation();

  const TypeScript_Quiz_Content = [
    {
      level: 'Fundamentals',
      intro:
        'Start here to learn the essentials of TypeScript, focusing on basic types, interfaces, and how TypeScript improves JavaScript.',
      QuizButtonText: "Let's get started!",
      ScreenName: 'TS_Fundamentals_Quiz_Question',
      topics: [
        {
          title: 'Basic Types',
          description: 'Learn how to define and use different data types.',
        },
        {
          title: 'Functions & Arrays',
          description: 'Understand typed functions and arrays.',
        },
        {
          title: 'Interfaces',
          description: 'Define the shape of objects with interfaces.',
        },
        {
          title: 'Type Inference',
          description: 'Let TypeScript infer types for you.',
        },
        {title: 'Enums', description: 'Use enums to define named constants.'},
      ],
    },
    {
      level: 'Intermediate',
      intro:
        'Enhance your skills by learning about more powerful TypeScript features like generics and type manipulation.',
      QuizButtonText: "Let's gear up!",
      ScreenName: 'TS_Intermediate_Quiz_Question',
      topics: [
        {
          title: 'Generics',
          description: 'Write reusable, type-safe components.',
        },
        {
          title: 'Union & Intersection Types',
          description: 'Combine types for more flexibility.',
        },
        {
          title: 'Type Assertions',
          description: 'Override TypeScript’s inferred types.',
        },
        {
          title: 'Modules & Namespaces',
          description: 'Organize and structure your code.',
        },
        {
          title: 'Decorators',
          description: 'Add meta-programming features to your classes.',
        },
      ],
    },
    {
      level: 'Advanced',
      intro:
        'Master TypeScript’s advanced features to handle complex projects and ensure robust type safety.',
      QuizButtonText: "Let's go!",
      ScreenName: 'TS_Advance_Quiz_Question',
      topics: [
        {
          title: 'Advanced Types',
          description: 'Dive deeper into utility types and mapped types.',
        },
        {
          title: 'Type Guards',
          description: 'Refine types using control flow analysis.',
        },
        {
          title: 'Conditional Types',
          description: 'Create types based on conditions.',
        },
        {
          title: 'Declaration Merging',
          description: 'Combine multiple declarations seamlessly.',
        },
        {
          title: 'TypeScript with React',
          description: 'Use TypeScript effectively in React projects.',
        },
      ],
    },
  ];

  return (
    <View style={TS_Main_Screen_Styles.Container}>
      <View style={TS_Main_Screen_Styles.TitleViewContainer}>
        <Text style={TS_Main_Screen_Styles.screenTitleText}>TypeScript</Text>
      </View>
      <ScrollView style={TS_Main_Screen_Styles.ScrollViewStyle}>
        <View style={TS_Main_Screen_Styles.IntroductionView}>
          <Text style={TS_Main_Screen_Styles.IntroductionTextStyle}>
            From understanding the basics of types and interfaces to mastering
            advanced concepts like generics and decorators, this quiz will help
            you write safer, more reliable code. Perfect for both beginners and
            seasoned developers aiming to level up their TypeScript skills.
          </Text>
        </View>
        <View>
          {TypeScript_Quiz_Content.map((level, index) => (
            <View key={index} style={TS_Main_Screen_Styles.LevelViewContainer}>
              <View style={TS_Main_Screen_Styles.SubTopicTitleView}>
                <Text style={TS_Main_Screen_Styles.SubTopicTitleText}>
                  {level.level}
                </Text>
                <View style={TS_Main_Screen_Styles.ThinLineView}>
                  <Text style={TS_Main_Screen_Styles.ThinLine} />
                </View>
              </View>
              <View style={TS_Main_Screen_Styles.IntroductionView}>
                <Text style={TS_Main_Screen_Styles.IntroductionTextStyle}>
                  {level.intro}
                </Text>
              </View>
              {level.topics.map((topic, topicIndex) => (
                <View
                  key={topicIndex}
                  style={TS_Main_Screen_Styles.BulletPointView}>
                  <Text style={TS_Main_Screen_Styles.BulletPointText}>
                    •{' '}
                    <Text
                      style={TS_Main_Screen_Styles.BulletPointHighlightedText}>
                      {topic.title}:
                    </Text>{' '}
                    {topic.description}
                  </Text>
                </View>
              ))}
              <View style={TS_Main_Screen_Styles.StartTheQuizButtonView}>
                <TouchableOpacity
                  style={TS_Main_Screen_Styles.StartTheQuizButton}
                  onPress={() => Navigation.navigate(`${level.ScreenName}`)}>
                  <Text style={TS_Main_Screen_Styles.StartTheQuizButtonText}>
                    {level.QuizButtonText}{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3178C6'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const TS_Main_Screen_Styles = StyleSheet.create({
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
    color: '#3178C6',
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
    color: '#3178C6',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});

export default TypeScriptMainScreen;
