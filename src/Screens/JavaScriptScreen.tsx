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
  Image,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Quest from '../Components/Questions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from './RNScreens/RNScreen';
import {useNavigation} from '@react-navigation/native';
import {QuizzyStyles} from '../Components/QuizzyStyles';

const JSScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // padding: 10,
        // backgroundColor: '#FFEEAD',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 60,
          // backgroundColor: '#f8f8f8',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#FFD35A',
            // fontWeight: '500',
            fontFamily: 'Poppins-Bold',
          }}>
          JavaScript
        </Text>
      </View>
      <ScrollView style={{}} contentContainerStyle={{paddingTop: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 300, width: 300, borderRadius: 10}}
            source={require('../../assets/Images/jsintro.png')}
          />
        </View>
        <Text
          style={{
            color: 'black',
            padding: 20,
            fontSize: 15,
            textAlign: 'justify',
          }}>
          JavaScript is a versatile programming language primarily used to
          create interactive and dynamic content on websites. If you are
          aspiring for a developer role, learning JS would allow you to enhance
          user experience by adding animations, form validations and other
          features that makes web pages come alive. To work with HTML and CSS
          seamlessly, JS is essential and it will help you in front-end
          development. By learning JS you also can work with server-side
          framework like Node.js, this makes JS a powerful tool for working in
          client-side and server-side development. Let’s not make it
          overwhelming for now, let’s focus on getting started instead. All the
          best.
          {'\n'}
          {'\n'}
          Doing one thing at a time is extremely important so its better for a
          one who is learning to start with fundamentals, always a good move
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              First fundamentals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Gear up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Advance topics
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    padding: 30,
  },
  buttonStyle: {
    width: '100%',
    height: 80,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#F6E96B',
    marginTop: 10,
  },
});
export default JSScreen;
