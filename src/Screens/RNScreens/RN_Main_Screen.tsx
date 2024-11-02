import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ReactNative_Main_Screen = () => {
  const Navigation = useNavigation();

  const Levels = [
    {
      level: 'First Fundamentals',
      intro:
        'Start here to learn the essentials of React Native, focusing on building basic components and understanding the core concepts. This stage will get you comfortable with creating simple mobile UIs.',
      QuizButtonText: "Let's get started!",
      ScreenName: 'RN_Fundamentals_quiz_question',
      topics: [
        {
          title: 'Components & JSX',
          description:
            'Learn the basics of building UI using components and JSX syntax.',
        },
        {
          title: 'Props & State',
          description:
            'Understand how to pass data and manage component memory.',
        },
        {
          title: 'Styling',
          description: 'Apply styles using React Native’s styling system.',
        },
        {
          title: 'Basic Layouts',
          description: 'Arrange components with Flexbox for responsive design.',
        },
        {
          title: 'Handling Events',
          description: 'Set up user interactions like taps and gestures.',
        },
      ],
    },
    {
      level: 'Gear Up!',
      intro:
        'This category will help you expand your knowledge to create more dynamic, interactive, and organized apps. You’ll focus on managing data, navigating between screens, and handling more complex components.',
      QuizButtonText: "Let's gear up!",
      ScreenName: 'RN_Intermediate_quiz_question',
      topics: [
        {
          title: 'Navigation',
          description:
            'Implement navigation between screens using React Navigation.',
        },
        {
          title: 'State Management',
          description:
            'Manage app state efficiently with Context API or libraries like Redux.',
        },
        {
          title: 'API Integration',
          description:
            'Fetch data from external sources and handle asynchronous operations.',
        },
        {
          title: 'Forms & User Input',
          description: 'Work with inputs, forms, and validation.',
        },
        {
          title: 'React Native CLI',
          description:
            'Familiarize yourself with the command-line interface for better control.',
        },
      ],
    },
    {
      level: 'Full throttle',
      intro:
        'At this level, you’ll explore features for building polished, high-performance apps. Expect to work with animations, native modules, and advanced optimization techniques.',
      QuizButtonText: "Let's go!",
      ScreenName: 'RN_Advance_quiz_question',
      topics: [
        {
          title: 'Animations',
          description:
            'Create smooth animations using the Animated API or Reanimated.',
        },
        {
          title: 'Performance Optimization',
          description: 'Techniques to improve rendering speed and reduce lag.',
        },
        {
          title: 'Custom Native Modules',
          description: 'Integrate native code for extended functionality.',
        },
        {
          title: 'Offline Functionality',
          description: 'Implement features like local storage and caching.',
        },
        {
          title: 'Testing & Debugging',
          description: 'Ensure app stability with testing and debugging tools.',
        },
      ],
    },
  ];

  return (
    <View style={RN_Main_Screen_Styles.Container}>
      <View style={RN_Main_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Main_Screen_Styles.screenTitleText}>ReactNative</Text>
      </View>
      <ScrollView style={RN_Main_Screen_Styles.ScrollViewStyle}>
        <View style={RN_Main_Screen_Styles.IntroductionView}>
          <Text style={RN_Main_Screen_Styles.IntroductionTextStyle}>
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
          {Levels.map((level, index) => (
            <View key={index} style={RN_Main_Screen_Styles.LevelViewContainer}>
              <View style={RN_Main_Screen_Styles.SubTopicTitleView}>
                <Text style={RN_Main_Screen_Styles.SubTopicTitleText}>
                  {level.level}
                </Text>
                <View style={RN_Main_Screen_Styles.ThinLineView}>
                  <Text style={RN_Main_Screen_Styles.ThinLine} />
                </View>
              </View>
              <View style={RN_Main_Screen_Styles.IntroductionView}>
                <Text style={RN_Main_Screen_Styles.IntroductionTextStyle}>
                  {level.intro}
                </Text>
              </View>
              {level.topics.map((topic, topicIndex) => (
                <View
                  key={topicIndex}
                  style={RN_Main_Screen_Styles.BulletPointView}>
                  <Text style={RN_Main_Screen_Styles.BulletPointText}>
                    •{' '}
                    <Text
                      style={RN_Main_Screen_Styles.BulletPointHighlightedText}>
                      {topic.title}:
                    </Text>{' '}
                    {topic.description}
                  </Text>
                </View>
              ))}
              <View style={RN_Main_Screen_Styles.StartTheQuizButtonView}>
                <TouchableOpacity
                  style={RN_Main_Screen_Styles.StartTheQuizButton}
                  onPress={() => Navigation.navigate(`${level.ScreenName}0`)}>
                  <Text style={RN_Main_Screen_Styles.StartTheQuizButtonText}>
                    Let's get started!{' '}
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

const RN_Main_Screen_Styles = StyleSheet.create({
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
    color: 'lightblue',
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

export default ReactNative_Main_Screen;
