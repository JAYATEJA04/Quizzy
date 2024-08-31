/* eslint-disable react-native/no-inline-styles */
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
  const Topic_Brief_Points = [
    'ReactJS is a powerful JavaScript library for building user interfaces, revolutionizing the way web applications are developed. Its component-based architecture promotes reusability and maintainability, making it a favorite among developers worldwide.',
    'Core concept: Building reusable UI components',
    'Virtual DOM: Efficiently updates and renders UI elements',
    'Declarative approach: Makes code more predictable and easier to debug',
    'Unidirectional data flow: Simplifies the understanding of how data changes over time',
    'Rich ecosystem: Vast collection of tools, libraries, and community support',
  ];

  const First_Fundamentals_Points = [
    'Creating and nesting components',
    'Writing markup with JSX',
    'JavaScript in JSX with curly braces',
    'Passing props to a component',
    'Conditional rendering',
    'Rendering lists',
    'Responding to events',
    'State: Memory of a component',
    'Render and commit',
    'State as a snapshot',
    'Queueing a series of state updates',
  ];

  const Intermediate_topic_points = [
    'Sharing state between components',
    'Preserving and resetting state',
    'Extracting state logic into a reducer',
    'Passing data deeply with context',
    'Scaling up with reducer and context',
    'Referencing values with refs',
    'Manipulating the DOM with refs',
    'Synchronizing with Effects',
    'You Might Not Need an Effect',
    'Lifecycle of reactive effects',
    'Separating events from Effects',
    'Removing Effect dependencies',
  ];

  const Advanced_topics_points = [
    'Reusing logic with custom Hooks',
    'Lifecycle of reactive effects',
    'Escape hatches (useImperativeHandle, useDeferredValue, useInsertionEffect)',
    'Referencing values with refs',
    'Manipulating the DOM with refs',
    'Performance optimization (useMemo, useCallback)',
    'Lazy loading components (React.lazy)',
    'Writing custom Hooks',
    'Implementing advanced UI patterns (portals, error boundaries)',
    'Server Components',
    'Concurrent rendering',
    'Suspense for data fetching',
  ];

  const Navigation = useNavigation();

  const handle_RJS_Fundamentals_Quiz_Button = () => {
    Navigation.navigate('Fundamental_quiz_question_0');
  };

  const handle_RJS_Intermediate_Topics_Quiz_Button = () => {
    Navigation.navigate('Intermediate_quiz_question_0');
  };
  const handle_RJS_Advance_Quiz_Button = () => {
    Navigation.navigate('Advance_quiz_question_0');
  };

  return (
    <View style={ReactJS_MainScreen_Styles.container}>
      <View style={ReactJS_MainScreen_Styles.screenTitleView}>
        <Text style={ReactJS_MainScreen_Styles.screenTitleText}>ReactJS</Text>
      </View>
      <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 10}}>
        <View>
          {Topic_Brief_Points.map((point, index) => (
            <View key={index} style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, color: 'black'}}>{'\u2022'} </Text>
              <Text style={{fontSize: 16, color: 'black'}}>{point}</Text>
            </View>
          ))}
        </View>
        <View style={ReactJS_MainScreen_Styles.Overall_View}>
          {/* First Fundamentals */}
          <View style={{marginTop: 5}}>
            <Text style={ReactJS_MainScreen_Styles.SubTopic_Title_Text}>
              First Fundamentals
            </Text>
            <View style={ReactJS_MainScreen_Styles.sub_category_container_view}>
              {First_Fundamentals_Points.map((point, index) => (
                <View
                  key={index}
                  style={ReactJS_MainScreen_Styles.Bullet_Point_View}>
                  <Text style={ReactJS_MainScreen_Styles.Bullet_point_style}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text
                    style={ReactJS_MainScreen_Styles.Bullet_point_text_style}>
                    {point}
                  </Text>
                </View>
              ))}
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#3C879C',
                      fontSize: 24,
                      textDecorationLine: 'underline',
                      fontFamily: 'Montserrat-Medium',
                    }}
                    onPress={() => handle_RJS_Fundamentals_Quiz_Button()}>
                    Let's start the quiz{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Intermediate topics */}
          <View style={{marginTop: 5}}>
            <Text style={ReactJS_MainScreen_Styles.SubTopic_Title_Text}>
              Gear up
            </Text>
            <View style={ReactJS_MainScreen_Styles.sub_category_container_view}>
              {Intermediate_topic_points.map((point, index) => (
                <View
                  key={index}
                  style={ReactJS_MainScreen_Styles.Bullet_Point_View}>
                  <Text style={ReactJS_MainScreen_Styles.Bullet_point_style}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text
                    style={ReactJS_MainScreen_Styles.Bullet_point_text_style}>
                    {point}
                  </Text>
                </View>
              ))}
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#3C879C',
                      fontSize: 24,
                      textDecorationLine: 'underline',
                      fontFamily: 'Montserrat-Medium',
                    }}
                    onPress={() =>
                      handle_RJS_Intermediate_Topics_Quiz_Button()
                    }>
                    Let's gear up!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Advance Topics */}
          <View style={{marginTop: 5}}>
            <Text style={ReactJS_MainScreen_Styles.SubTopic_Title_Text}>
              Advance Topics
            </Text>
            <View style={ReactJS_MainScreen_Styles.sub_category_container_view}>
              {Advanced_topics_points.map((point, index) => (
                <View
                  key={index}
                  style={ReactJS_MainScreen_Styles.Bullet_Point_View}>
                  <Text style={ReactJS_MainScreen_Styles.Bullet_point_style}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text
                    style={ReactJS_MainScreen_Styles.Bullet_point_text_style}>
                    {point}
                  </Text>
                </View>
              ))}
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#3C879C',
                      fontSize: 24,
                      textDecorationLine: 'underline',
                      fontFamily: 'Montserrat-Medium',
                    }}
                    onPress={() => handle_RJS_Advance_Quiz_Button()}>
                    Let's go!{' '}
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

const ReactJS_MainScreen_Styles = StyleSheet.create({
  container: {
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
  Overall_View: {
    flex: 1,
  },
  SubTopic_Title_Text: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  sub_category_container_view: {
    padding: 10,
    backgroundColor: '#EEFDFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'lightblue',
  },
  Bullet_Point_View: {
    flexDirection: 'row',
  },
  Bullet_point_style: {
    color: 'black',
    fontSize: 20,
  },
  Bullet_point_text_style: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    fontWeight: '300',
  },
});

export default ReactJS_MainScreen;
