/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Topic_ProgressBar = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
      }}>
      <View
        style={{
          width: '95%',
          height: 8,
          //   backgroundColor: '#ffffff',
          borderRadius: 10,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          elevation: 2,
        }}>
        <View style={{height: '100%', backgroundColor: '#F9BB1C'}} />
      </View>
    </View>
  );
};

export default Topic_ProgressBar;
