// RN main screen
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopicMainScreen = ({route}) => {
  const {screenTitle} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', borderWidth: 1}}>{screenTitle}</Text>
      <Text style={{color: 'black'}}>Topic Main Screen</Text>
    </View>
  );
};

export default TopicMainScreen;
