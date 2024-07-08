/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ReactJSCountContext} from '../../Components/ReactJS_components/ReactJS_CountContext';

const ReactJS_Dashboard = () => {
  const {countRJSCorrectOptions, countRJSWrongOptions}: any =
    useContext(ReactJSCountContext);

  return (
    <View style={styles.container}>
      <View style={styles.TitleTextView}>
        <Text style={styles.TitleTextStyle}>Results</Text>
      </View>
      <Text style={{color: 'black', fontSize: 16}}>
        Total number of correct answers: {countRJSCorrectOptions}
      </Text>
      <Text style={{color: 'black', fontSize: 16}}>
        Total number of wrong answers: {countRJSWrongOptions}
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
    top: 55,
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

export default ReactJS_Dashboard;
