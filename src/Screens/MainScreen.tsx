/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Quest from '../Components/Questions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from './RNScreen';
import {useNavigation} from '@react-navigation/native';
import RJSScreen from './ReactJSScreen';
import JSScreen from './JavaScriptScreen';
import TSScreen from './TypeScriptScreen';
import JAVAScreen from './JAVAScreen';
import RESTAPIScreen from './APIScreen';
import NODEJSScreen from './NODEScreen';
import GolangScreen from './GolangScreen';

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const HomeScreen = () => {
  const Navigation: any = useNavigation();

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={[styles.TitleContainer1, styles.borderwidthOfAll]}>
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
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('React Native')}>
          <Text style={{color: 'black'}}>React Native</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('ReactJS')}>
          <Text style={{color: 'black'}}>ReactJS</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('JS Screen')}>
          <Text style={{color: 'black'}}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('TS Screen')}>
          <Text style={{color: 'black'}}>TypeScript</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('JAVA Screen')}>
          <Text style={{color: 'black'}}>JAVA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('API Screen')}>
          <Text style={{color: 'black'}}>REST APIs</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('NODE Screen')}>
          <Text style={{color: 'black'}}>NodeJS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            height: SCREEN_HEIGHT / 6,
            width: SCREEN_WIDTH / 2.5,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => Navigation.navigate('GO Screen')}>
          <Text style={{color: 'black'}}>Golang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="React Native"
        component={RNScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#61DAFB',
          },
        }}
      />
      <Stack.Screen name="ReactJS" component={RJSScreen} />
      <Stack.Screen name="JS Screen" component={JSScreen} />
      <Stack.Screen name="TS Screen" component={TSScreen} />
      <Stack.Screen name="JAVA Screen" component={JAVAScreen} />
      <Stack.Screen name="API Screen" component={RESTAPIScreen} />
      <Stack.Screen name="NODE Screen" component={NODEJSScreen} />
      <Stack.Screen name="GO Screen" component={GolangScreen} />
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
    // height: SCREEN_HEIGHT / 4,
    borderWidth: 1,
    height: 'auto',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  childContainer2: {
    // height: SCREEN_HEIGHT / 4,
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
  borderwidthOfAll: {
    // borderWidth: 1,
  },
});

export default MainScreen;
