import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ReactNative_Main_Screen = () => {
  const Navigation = useNavigation();

  const handle_RN_FundmentalsQuizButton = () => {
    Navigation.navigate('Question0');
  };

  return (
    <View style={RN_Main_Screen_Styles.mainContainer}>
      <View style={RN_Main_Screen_Styles.screenTitleView}>
        <Text style={RN_Main_Screen_Styles.screenTitleText}>ReactNative</Text>
      </View>
      <ScrollView
        style={RN_Main_Screen_Styles.scroll_view}
        contentContainerStyle={
          RN_Main_Screen_Styles.scroll_view_contentcontainer
        }>
        <Text style={RN_Main_Screen_Styles.Introduction_Text_Style}>
          Imagine creating mobile apps using the JavaScript skills you already
          have. That's the power of React Native. It's not just another
          framework; it's a bridge between web and mobile development.
          {'\n'}
          {'\n'}
          React Native lets you build mobile apps for both iOS and Android using
          a single codebase. If you're familiar with React for web development,
          you're already halfway there!
          {'\n'}
          {'\n'}
          <Text
            style={RN_Main_Screen_Styles.Highlight_In_Introduction_Text_Style}>
            Here's why React Native is exciting:
          </Text>
          {'\n'}
          {'\t'}
          {'\u2022'} You'll write JavaScript, but create truly native apps.
          {'\n'}
          {'\t'}
          {'\u2022'} Your skills become instantly more versatile.
          {'\n'}
          {'\t'}
          {'\u2022'} You can see your changes in real-time as you code.
          {'\n'}
          {'\t'}
          {'\u2022'} It opens doors to both mobile and web development careers.
          {'\n'}
          {'\n'}
          Don't worry if it sounds complex – we'll start with the basics. React
          Native breaks down into simple, reusable components, making it easier
          to understand and build upon.
          {'\n'}
          {'\n'}
          Doing one thing at a time is extremely important so its better to
          start with fundamentals.
        </Text>
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
                  onPress={() => Alert.alert('lets gear up!')}>
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
                  onPress={() => Alert.alert('lets advance up!')}>
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
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  screenTitleView: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 30,
    color: 'lightblue',
    fontFamily: 'Poppins-Bold',
  },
  scroll_view: {
    flex: 1,
  },
  scroll_view_contentcontainer: {
    paddingTop: 20,
  },
  Introduction_Text_Style: {
    color: 'black',
    fontSize: 15,
    textAlign: 'justify',
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
    backgroundColor: '#E7FCFF',
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
