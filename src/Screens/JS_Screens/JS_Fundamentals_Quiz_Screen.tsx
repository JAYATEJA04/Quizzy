/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import JS_Fundamentals_Questions from '../../Components/JS_Components/JS_Fundamentals_questions';

const JS_Fundamentals_Quiz_Screen = ({route}) => {
  const {question, options, correctAnswer, nextScreen} = route.params;

  const [result, setResult] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionSelected = option => {
    setOptionSelected(option);
    setResult(!result);
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
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
          // borderWidth: 1,
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
      {/* Question, Options, Explanation and next button */}
      <View style={{padding: 10, flex: 1}}>
        {/* bar */}
        <View style={{paddingTop: 45}} />
        <View style={{flex: 1}}>
          {/* question */}
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Montserrat-SemiBold',
              }}>
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
                // disabled={result}
              >
                <Text style={{fontSize: 16, color: 'black'}}>{option}</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* <View style={{}}>
            <View
              style={{
                paddingLeft: 20,
                paddingTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  height: 60,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  elevation: 3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 16, color: 'black'}}>String()</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20, paddingTop: 10}}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  height: 60,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  elevation: 3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 16, color: 'black'}}>String()</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20, paddingTop: 10}}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  height: 60,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  elevation: 3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 16, color: 'black'}}>String()</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 20, paddingTop: 10}}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  height: 60,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  elevation: 3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 16, color: 'black'}}>String()</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* Explanation view and continue button */}
          {result && (
            <View style={{flex: 1, paddingTop: 20}}>
              <View
                style={
                  optionSelected === correctAnswer
                    ? styles.correctAnswerExplanationView
                    : styles.wrongAnswerExplanationView
                }
              />
              <View style={{flex: 1, paddingTop: 20}}>
                <TouchableOpacity
                  style={
                    optionSelected === correctAnswer
                      ? styles.continueButtonIfCorrect_Style
                      : styles.continueButtonIfWrong_Style
                  }>
                  <Text style={{color: 'black', fontSize: 24}}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* <View style={{flex: 1, paddingTop: 20}}>
            <View
              style={{
                height: 300,
                width: '100%',
                // paddingTop: 28,
                backgroundColor: '#C7FFB7',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.2)',
              }}
            />
            <View style={{flex: 1, paddingTop: 20}}>
              <TouchableOpacity
                style={{
                  height: 70,
                  elevation: 3,
                  backgroundColor: '#6FE427',
                  borderRadius: 8,
                  borderColor: 'rgba(111, 228, 39, 0.2)',
                }}
              />
            </View>
          </View> */}
        </View>
      </View>
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
    height: 300,
    width: '100%',
    // paddingTop: 28,
    backgroundColor: '#C7FFB7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(147, 250, 165, 0.8)',
  },
  wrongAnswerExplanationView: {
    height: 300,
    width: '100%',
    // paddingTop: 28,
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

export default JS_Fundamentals_Quiz_Screen;
