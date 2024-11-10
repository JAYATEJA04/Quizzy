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

const JAVAMainScreen = () => {
  const Navigation = useNavigation();

  const Java_Quiz_Content = [
    {
      level: 'Fundamentals',
      intro:
        'Start here to learn the essentials of Java, focusing on basic syntax, data types, and object-oriented principles.',
      QuizButtonText: "Let's get started!",
      ScreenName: 'JAVA_Fundamentals_Quiz_Question',
      topics: [
        {
          title: 'Variables & Data Types',
          description: 'Learn how to store and use different types of data.',
        },
        {
          title: 'Control Flow',
          description: 'Understand if-else, switch, and loops.',
        },
        {
          title: 'Classes & Objects',
          description: 'Explore the building blocks of Java programs.',
        },
        {
          title: 'Methods',
          description: 'Write reusable code blocks to perform tasks.',
        },
        {
          title: 'Basic Exception Handling',
          description: 'Handle errors gracefully.',
        },
      ],
    },
    {
      level: 'Intermediate',
      intro:
        'Expand your skills by learning about more advanced Java features like collections and multithreading.',
      QuizButtonText: "Let's gear up!",
      ScreenName: 'JAVA_Intermediate_Quiz_Question',
      topics: [
        {
          title: 'Collections Framework',
          description: 'Work with dynamic data structures.',
        },
        {
          title: 'Inheritance & Polymorphism',
          description: 'Leverage object-oriented design.',
        },
        {
          title: 'Interfaces & Abstract Classes',
          description: 'Create flexible and scalable code.',
        },
        {
          title: 'Multithreading',
          description: 'Handle multiple tasks simultaneously.',
        },
        {title: 'I/O Streams', description: 'Read and write data efficiently.'},
      ],
    },
    {
      level: 'Advanced',
      intro:
        'Master Java’s advanced capabilities for handling large-scale applications and performance optimization.',
      QuizButtonText: "Let's go!",
      ScreenName: 'JAVA_Advance_Quiz_Question',
      topics: [
        {title: 'Generics', description: 'Write type-safe and reusable code.'},
        {
          title: 'Lambdas & Streams',
          description: 'Simplify data processing with functional programming.',
        },
        {
          title: 'JVM Internals',
          description: 'Understand how Java runs under the hood.',
        },
        {
          title: 'Concurrency Utilities',
          description: 'Optimize performance with advanced thread management.',
        },
        {
          title: 'Java 9+ Features',
          description: 'Explore the latest additions to the language.',
        },
      ],
    },
  ];

  return (
    <View style={Java_Main_Screen_Styles.Container}>
      <View style={Java_Main_Screen_Styles.TitleViewContainer}>
        <Text style={Java_Main_Screen_Styles.screenTitleText}>JAVA</Text>
      </View>
      <ScrollView style={Java_Main_Screen_Styles.ScrollViewStyle}>
        <View style={Java_Main_Screen_Styles.IntroductionView}>
          <Text style={Java_Main_Screen_Styles.IntroductionTextStyle}>
            This quiz takes you through the fundamentals of Java programming,
            object-oriented principles, and advanced features like
            multithreading and streams. Whether you’re starting your coding
            journey or aiming to sharpen your Java expertise, this section will
            guide you step by step.
          </Text>
        </View>
        <View>
          {Java_Quiz_Content.map((level, index) => (
            <View
              key={index}
              style={Java_Main_Screen_Styles.LevelViewContainer}>
              <View style={Java_Main_Screen_Styles.SubTopicTitleView}>
                <Text style={Java_Main_Screen_Styles.SubTopicTitleText}>
                  {level.level}
                </Text>
                <View style={Java_Main_Screen_Styles.ThinLineView}>
                  <Text style={Java_Main_Screen_Styles.ThinLine} />
                </View>
              </View>
              <View style={Java_Main_Screen_Styles.IntroductionView}>
                <Text style={Java_Main_Screen_Styles.IntroductionTextStyle}>
                  {level.intro}
                </Text>
              </View>
              {level.topics.map((topic, topicIndex) => (
                <View
                  key={topicIndex}
                  style={Java_Main_Screen_Styles.BulletPointView}>
                  <Text style={Java_Main_Screen_Styles.BulletPointText}>
                    •{' '}
                    <Text
                      style={
                        Java_Main_Screen_Styles.BulletPointHighlightedText
                      }>
                      {topic.title}:
                    </Text>{' '}
                    {topic.description}
                  </Text>
                </View>
              ))}
              <View style={Java_Main_Screen_Styles.StartTheQuizButtonView}>
                <TouchableOpacity
                  style={Java_Main_Screen_Styles.StartTheQuizButton}
                  onPress={() => Navigation.navigate(`${level.ScreenName}`)}>
                  <Text style={Java_Main_Screen_Styles.StartTheQuizButtonText}>
                    {level.QuizButtonText}{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'red'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const Java_Main_Screen_Styles = StyleSheet.create({
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
    color: 'red',
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
    color: 'red',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});
export default JAVAMainScreen;
