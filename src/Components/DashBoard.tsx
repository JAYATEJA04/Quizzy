/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CountContext} from './CountContext';

const Dashboard = () => {
  const {countCorrectOptions, countWrongOptions}: any =
    useContext(CountContext);

  return (
    <View style={styles.container}>
      <View style={styles.TitleTextView}>
        <Text style={styles.TitleTextStyle}>Results</Text>
      </View>
      <Text style={{color: 'black', fontSize: 16}}>
        Total number of correct answers: {countCorrectOptions}
      </Text>
      <Text style={{color: 'black', fontSize: 16}}>
        Total number of wrong answers: {countWrongOptions}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  TitleTextView: {
    height: 100,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#FDFFD2',
    borderRadius: 10,
  },
  TitleTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Dashboard;
