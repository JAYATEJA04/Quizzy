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

  const handle_RN_FundmentalsQuizButton = () => {
    Navigation.navigate('Question0');
  };

  const handleRN_IntermediateTopics_quiz_button = () => {
    Navigation.navigate('Mid_Question0');
  };

  const handle_RN_AdvanceTopics_quiz_button = () => {
    Navigation.navigate('AdvanceQuestion0');
  };

  return (
    <View style={RN_Main_Screen_Styles.Container}>
      <View style={RN_Main_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Main_Screen_Styles.screenTitleText}>ReactNative</Text>
      </View>
      <ScrollView style={RN_Main_Screen_Styles.ScrollViewStyle}>
        <View style={RN_Main_Screen_Styles.IntroductionView}>
          <Text style={RN_Main_Screen_Styles.Introduction_Text_Style}>
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
        <View style={RN_Main_Screen_Styles.Overall_View}>
          {/* First Fundamentals */}
          <View style={RN_Main_Screen_Styles.SubTopic_View}>
            {/* First Fundamentals title */}
            <View>
              <Text style={RN_Main_Screen_Styles.SubTopic_Title_Text}>
                First Fundamentals
              </Text>
            </View>
            <View style={RN_Main_Screen_Styles.sub_topic_container_view}>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  These are the building blocks of React Native. Without
                  mastering the basics, as a developers you will struggle to
                  understand or implement more complex features. This category
                  ensures a solid foundation, covering the essential components,
                  layout, and basic user interaction.
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Topics you will be quizzed:
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Core Components and APIs
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Basic components (View, Text, Image, TextInput, ScrollView,
                  Button)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Handling text input
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Using a ScrollView
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Using List Views (FlatList, SectionList)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Styling and Layout (Flexbox)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Handling Touches (Buttons, Touchable components)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Using State and Props
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Platform Specific Code
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={RN_Main_Screen_Styles.start_the_quiz_button_style}
                  onPress={() => handle_RN_FundmentalsQuizButton()}>
                  <Text
                    style={
                      RN_Main_Screen_Styles.start_the_quiz_button_text_style
                    }>
                    Let’s get started!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Gearing up things! */}
          <View style={RN_Main_Screen_Styles.SubTopic_View}>
            {/* Gear up title */}
            <View>
              <Text style={RN_Main_Screen_Styles.SubTopic_Title_Text}>
                Gear up
              </Text>
            </View>
            <View style={RN_Main_Screen_Styles.sub_topic_container_view}>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Ready to level up? In the gear up section, we'll dive deep
                  into ReactNative's capabilities.
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Topics you will be quizzed:
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Navigation (React Navigation basics)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Networking (using Fetch API)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Handling text input
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Images (handling and caching)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Animations (Animated API basics)
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Accessibility
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Timers
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Colors
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Device Information
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Transforms
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Handling App State changes
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={RN_Main_Screen_Styles.start_the_quiz_button_style}
                  onPress={() => handleRN_IntermediateTopics_quiz_button()}>
                  <Text
                    style={
                      RN_Main_Screen_Styles.start_the_quiz_button_text_style
                    }>
                    Let’s gear up!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Advance Topics */}
          <View style={RN_Main_Screen_Styles.SubTopic_View}>
            {/* Advance topics title */}
            <View>
              <Text style={RN_Main_Screen_Styles.SubTopic_Title_Text}>
                Advance topics
              </Text>
            </View>
            <View style={RN_Main_Screen_Styles.sub_topic_container_view}>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Now we're talking! In this section, you'll explore the
                  powerful features that make ReactNative shine.
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.Each_bullet_pointView}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Topics you will be quizzed:
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Deep Linking
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Running on device
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Debugging
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Testing
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Performance Optimization
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Security
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Native Modules
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Native Components
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Headless JS
                </Text>
              </View>
              <View style={RN_Main_Screen_Styles.sub_bullet_point_view}>
                <Text style={RN_Main_Screen_Styles.bullet_point_style}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={RN_Main_Screen_Styles.bullet_point_text_style}>
                  Integration with Existing Apps
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={RN_Main_Screen_Styles.start_the_quiz_button_style}
                  onPress={() => handle_RN_AdvanceTopics_quiz_button()}>
                  <Text
                    style={
                      RN_Main_Screen_Styles.start_the_quiz_button_text_style
                    }>
                    Let’s go!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
  IntroductionView: {
    marginTop: 10,
  },
  scroll_view_contentcontainer: {
    paddingTop: 20,
    padding: 5,
  },
  Introduction_Text_Style: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  Highlight_In_Introduction_Text_Style: {fontWeight: 'bold'},
  Overall_View: {
    flex: 1,
  },
  SubTopic_View: {
    flex: 1,
    padding: 5,
  },
  SubTopic_Title_Text: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  sub_topic_container_view: {
    padding: 10,
    backgroundColor: '#EEFDFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightblue',
  },
  Each_bullet_pointView: {
    flexDirection: 'row',
  },
  bullet_point_style: {
    color: 'black',
    fontSize: 20,
  },
  bullet_point_text_style: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    fontWeight: '300',
  },
  sub_bullet_point_view: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  start_the_quiz_button_style: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  start_the_quiz_button_text_style: {
    color: '#3C879C',
    fontSize: 24,
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-Medium',
  },
});

export default ReactNative_Main_Screen;
