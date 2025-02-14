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

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const HomeScreen = () => {
  const Navigation: any = useNavigation();

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={styles.TitleContainer1}>
        <Text style={styles.textCC1}>Quizzy</Text>
      </View>
      <View style={styles.childContainer2}>
        <Text style={{fontFamily: 'AlberSans-Black', color: 'black'}}>
          Choose your tech stack here:
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('React Native')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            React Native
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('ReactJS')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            ReactJS
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('JS Screen')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            JavaScript
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('TS Screen')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            TypeScript
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('JAVA Screen')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            JAVA
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 8,
            elevation: 3,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
          }}
          onPress={() => Navigation.navigate('NODE Screen')}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'AlbertSans-Black',
            }}>
            NodeJS
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const topicScreens = [
  {name: 'ReactNative', label: 'React Native', component: AllRNScreens},
  {name: 'ReactJS', label: 'ReactJS', component: All_ReactJS_Screens},
  {name: 'JavaScript', label: 'JavaScript', component: All_JS_Screens},
  {name: 'TypeScript', label: 'TypeScript', component: All_TS_Screens},
  {name: 'JAVA', label: 'JAVA', component: ALL_JAVA_Screens},
  {name: 'NodeJS', label: 'NodeJS', component: NODEJSScreen},
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
            Topictitle: screen.label,
          }}
        />
      ))}
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
