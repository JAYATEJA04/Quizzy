/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import NODEJSScreen from './NODEScreen';
import AllRNScreens from './RNScreens/AllRNScreens';
import All_ReactJS_Screens from './ReactJS_Screens/All_ReactJS_Screens';
import All_JS_Screens from './JS_Screens/ALL_JS_Screens';
import All_TS_Screens from './TS_Screens/All_TS_Screens';
import ALL_JAVA_Screens from './Java_Screens/ALL_Java_Screens';
import QuizzyMainScreen from './QuizzyMainScreen';
import ScreensOfTopic from './ScreensOfTopic';
import DashBoard from './ResultsDashboard2';

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const topicScreens = [
  {name: 'ReactNativeScreen', title: 'ReactNative', component: AllRNScreens},
  {name: 'ReactJSScreen', title: 'React', component: All_ReactJS_Screens},
  {name: 'JavaScriptScreen', title: 'JavaScript', component: All_JS_Screens},
  {name: 'TypeScriptScreen', title: 'TypeScript', component: All_TS_Screens},
  {name: 'JAVAScreen', title: 'JAVA', component: ALL_JAVA_Screens},
  {name: 'NodeJSScreen', title: 'NodeJS', component: NODEJSScreen},
];

const MainScreen = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen
    //     name="React Native"
    //     component={AllRNScreens}
    //     options={{gestureEnabled: false}}
    //   />
    //   <Stack.Screen name="ReactJS" component={All_ReactJS_Screens} />
    //   <Stack.Screen name="JS Screen" component={All_JS_Screens} />
    //   <Stack.Screen name="TS Screen" component={All_TS_Screens} />
    //   <Stack.Screen name="JAVA Screen" component={ALL_JAVA_Screens} />
    //   <Stack.Screen name="NODE Screen" component={NODEJSScreen} />
    // </Stack.Navigator>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">
        {() => <QuizzyMainScreen title="Quizzy" screens={topicScreens} />}
      </Stack.Screen>
      {topicScreens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={ScreensOfTopic}
          options={{gestureEnabled: false}}
          initialParams={{
            Topictitle: screen.title,
          }}
        />
      ))}
      {/* <Stack.Screen name="Dashboard" component={DashBoard} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'F3F8FF',
  },
  TitleContainer1: {
    borderWidth: 1,
    height: 'auto',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  childContainer2: {
    margin: 5,
    height: 'auto',
  },
  textCC1: {
    fontSize: 40,
    fontFamily: 'AlbertSans-BoldItalic',
    color: '#FDA403',
  },
  optionsView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
  },
});

export default MainScreen;
