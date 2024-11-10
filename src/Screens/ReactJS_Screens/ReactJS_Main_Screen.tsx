import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ReactJS_MainScreen = () => {
  const ReactJS_Quiz_Content = [
    {
      level: 'Fundamentals',
      intro:
        'Start here to learn the essentials of ReactJS, focusing on building basic components and understanding the core concepts.',
      QuizButtonText: "Let's get started!",
      ScreenName: 'RJS_Fundamentals_quiz_question',
      topics: [
        {
          title: 'JSX',
          description: 'Write HTML-like syntax directly in JavaScript.',
        },
        {title: 'Components', description: 'Build reusable UI elements.'},
        {
          title: 'Props & State',
          description: 'Pass data and manage component memory.',
        },
        {
          title: 'Event Handling',
          description: 'Capture user interactions like clicks and inputs.',
        },
        {
          title: 'Conditional Rendering',
          description: 'Render different UI elements based on conditions.',
        },
      ],
    },
    {
      level: 'Intermediate',
      intro:
        'Dive deeper into React’s features, managing more complex applications efficiently.',
      QuizButtonText: "Let's gear up!",
      ScreenName: 'RJS_Intermediate_quiz_question',
      topics: [
        {
          title: 'Hooks',
          description:
            'Manage state and side effects in functional components.',
        },
        {
          title: 'Context API',
          description: 'Share data across components without props drilling.',
        },
        {
          title: 'Routing',
          description: 'Navigate between pages using React Router.',
        },
        {
          title: 'Form Handling',
          description: 'Work with inputs and validations.',
        },
        {
          title: 'Lifecycle Methods',
          description: 'Control component behavior at different stages.',
        },
      ],
    },
    {
      level: 'Advanced',
      intro:
        'Explore powerful tools and techniques to optimize performance and handle large-scale applications.',
      QuizButtonText: "Let's go!",
      ScreenName: 'RJS_Advance_quiz_question',
      topics: [
        {title: 'Custom Hooks', description: 'Reuse logic across components.'},
        {
          title: 'Performance Optimization',
          description: 'Use tools like useMemo and useCallback.',
        },
        {
          title: 'Code Splitting & Lazy Loading',
          description:
            'Improve app performance by loading only necessary code.',
        },
        {
          title: 'Error Boundaries',
          description: 'Handle errors gracefully in your application.',
        },
        {
          title: 'Server-Side Rendering (SSR)',
          description:
            'Improve SEO and performance with frameworks like Next.js.',
        },
      ],
    },
  ];

  const Navigation = useNavigation();

  return (
    <View style={RJS_Main_Screen_Styles.Container}>
      <View style={RJS_Main_Screen_Styles.TitleViewContainer}>
        <Text style={RJS_Main_Screen_Styles.screenTitleText}>ReactJS</Text>
      </View>
      <ScrollView style={RJS_Main_Screen_Styles.ScrollViewStyle}>
        <View style={RJS_Main_Screen_Styles.IntroductionView}>
          <Text style={RJS_Main_Screen_Styles.IntroductionTextStyle}>
            You’ll explore key concepts like components, state, and props, move
            on to hooks, routing, and context, and finally tackle advanced
            topics like performance optimization and server-side rendering.
            Whether you're just starting out or aiming to refine your skills,
            this quiz will guide you through every step of your React journey.
          </Text>
        </View>
        <View>
          {ReactJS_Quiz_Content.map((level, index) => (
            <View key={index} style={RJS_Main_Screen_Styles.LevelViewContainer}>
              <View style={RJS_Main_Screen_Styles.SubTopicTitleView}>
                <Text style={RJS_Main_Screen_Styles.SubTopicTitleText}>
                  {level.level}
                </Text>
                <View style={RJS_Main_Screen_Styles.ThinLineView}>
                  <Text style={RJS_Main_Screen_Styles.ThinLine} />
                </View>
              </View>
              <View style={RJS_Main_Screen_Styles.IntroductionView}>
                <Text style={RJS_Main_Screen_Styles.IntroductionTextStyle}>
                  {level.intro}
                </Text>
              </View>
              {level.topics.map((topic, topicIndex) => (
                <View
                  key={topicIndex}
                  style={RJS_Main_Screen_Styles.BulletPointView}>
                  <Text style={RJS_Main_Screen_Styles.BulletPointText}>
                    •{' '}
                    <Text
                      style={RJS_Main_Screen_Styles.BulletPointHighlightedText}>
                      {topic.title}:
                    </Text>{' '}
                    {topic.description}
                  </Text>
                </View>
              ))}
              <View style={RJS_Main_Screen_Styles.StartTheQuizButtonView}>
                <TouchableOpacity
                  style={RJS_Main_Screen_Styles.StartTheQuizButton}
                  onPress={() => Navigation.navigate(`${level.ScreenName}`)}>
                  <Text style={RJS_Main_Screen_Styles.StartTheQuizButtonText}>
                    {level.QuizButtonText}{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#58C4DC'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const RJS_Main_Screen_Styles = StyleSheet.create({
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
    color: '#58C4DC',
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
    color: '#58C4DC',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});

export default ReactJS_MainScreen;
