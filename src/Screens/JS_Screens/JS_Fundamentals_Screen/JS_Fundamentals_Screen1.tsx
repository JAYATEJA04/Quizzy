/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const JS_Fundamentals_Screen1 = () => {
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          // backgroundColor: '#f8f8 f8',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}>
        <Text
          style={{color: '#FFD35A', fontFamily: 'Poppins-Bold', fontSize: 30}}>
          JavaScript
        </Text>
      </View>
    </View>
  );
};

export default JS_Fundamentals_Screen1;
