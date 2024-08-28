/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const RN_FundamentalsQuizScreen = ({route}) => {
  const {
    id,
    question,
    options,
    correctAnswer,
    explanation,
    referenceLink,
    nextScreen,
  } = route.params;
  const [result, setResult] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const Navigation = useNavigation();

  const handleOptionSelected = option => {
    setOptionSelected(option);
    setResult(!result);
  };

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
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
            color: 'lightblue',
            // fontWeight: '500',
            fontFamily: 'Poppins-Bold',
          }}>
          ReactNative
        </Text>
      </View>
      <ScrollView style={{flex: 1, padding: 10}}>
        {/* bar */}
        <View style={{paddingTop: 45}} />
        <View style={{flex: 1}}>
          {/* question */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              {id}
              {'.) '}
              {question}
            </Text>
          </View>
          {/* Option bars */}
          {options.map((option, index) => (
            <View
              key={index}
              style={{
                paddingLeft: 20,
                paddingTop: 10,
              }}>
              <TouchableOpacity
                style={[
                  styles.defaultOptionStyle,
                  optionSelected === option
                    ? option === correctAnswer
                      ? styles.correactOptionChoosenStyle
                      : styles.wrongOptionChoosenStyle
                    : null,
                ]}
                onPress={() => handleOptionSelected(option)}
                disabled={result}>
                <Text style={{fontSize: 16, color: 'black'}}>{option}</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* Explanation view and continue button */}
          {result && (
            <View
              style={{
                flex: 1,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={
                  optionSelected === correctAnswer
                    ? styles.correctAnswerExplanationView
                    : styles.wrongAnswerExplanationView
                }>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: '300',
                      textAlign: 'center',
                    }}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      fontWeight: '300',
                      // borderWidth: 1,
                    }}>
                    {explanation}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: '300',
                      textAlign: 'center',
                    }}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      fontWeight: '300',
                    }}>
                    For reference:{' '}
                    <Text
                      onPress={() => Alert.alert('you pressed a weblink')}
                      style={{color: 'blue', textDecorationLine: 'underline'}}>
                      {referenceLink}
                    </Text>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  justifyContent: 'flex-end',
                }}>
                {nextScreen ? (
                  <TouchableOpacity
                    style={
                      optionSelected === correctAnswer
                        ? styles.continueButtonIfCorrect_Style
                        : styles.continueButtonIfWrong_Style
                    }
                    onPress={() => Navigation.navigate(nextScreen)}>
                    <Text style={{color: 'black', fontSize: 24}}>Continue</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{color: 'black'}}>THE END!</Text>
                )}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultOptionStyle: {
    paddingLeft: 10,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    elevation: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 8,
  },
  correactOptionChoosenStyle: {
    paddingLeft: 10,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(199, 255, 183, 0.2)',
    elevation: 3,
    backgroundColor: '#C7FFB7',
    justifyContent: 'center',
    borderRadius: 8,
  },
  wrongOptionChoosenStyle: {
    paddingLeft: 10,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(250, 0, 0, 0.2)',
    elevation: 3,
    backgroundColor: '#FFC5B2',
    justifyContent: 'center',
    borderRadius: 8,
  },
  correctAnswerExplanationView: {
    padding: 10,
    height: 'auto',
    width: '100%',
    backgroundColor: '#C7FFB7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(147, 250, 165, 0.8)',
  },
  wrongAnswerExplanationView: {
    padding: 10,
    height: 'auto',
    width: '100%',
    backgroundColor: '#FFC5B2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
  continueButtonIfCorrect_Style: {
    height: 70,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6FE427',
    borderRadius: 8,
    borderColor: 'rgba(111, 228, 39, 0.8)',
  },
  continueButtonIfWrong_Style: {
    height: 70,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2A12',
    borderRadius: 8,
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
});

export default RN_FundamentalsQuizScreen;
