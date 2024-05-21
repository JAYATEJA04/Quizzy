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
  Platform,
} from 'react-native';

const ProgressBar = ({progress}) => {
  const count = 0;
  return (
    <View style={styles.ProgressBarContainer}>
      <View style={[styles.ProgressBarStyle, {width: `${progress}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  ProgressBarContainer: {
    width: '100%',
    height: 20,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  ProgressBarStyle: {
    height: '100%',
    backgroundColor: 'green',
  },
});

export default ProgressBar;
