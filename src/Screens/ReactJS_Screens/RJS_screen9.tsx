/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {QuizzyStyles} from '../../Components/QuizzyStyles';
import ReactJS_Questions from '../../Components/ReactJS_components/ReactJS_Content';
import {ReactJSCountContext} from '../../Components/ReactJS_components/ReactJS_CountContext';

const RJS_screen9 = () => {
  const Navigation = useNavigation();
  const [pressed, setPressed] = useState(false);
  const [checkOption, setCheckOption] = useState(false);
  const [indexOfTheOption, setIndexOfTheOption] = useState(null);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [selectedExplanation, setSelectedExplanation] = useState('');
  const {
    countRJSCorrectOptions,
    setCountRJSCorrectOptions,
    countRJSWrongOptions,
    setCountRJSWrongOptions,
  }: any = useContext(ReactJSCountContext);

  const handleOptionSelected = (option, index) => {
    if (option.isItTrue) {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(true);
      setSelectedExplanation(option.explanation);
      setCountRJSCorrectOptions(countRJSCorrectOptions + 1);
    } else {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(false);
      setSelectedExplanation(option.explanation);
      setCountRJSWrongOptions(countRJSWrongOptions + 1);
    }
  };

  const styleSelectedOption = (question, index) => {
    if (indexOfTheOption === index) {
      return question.isItTrue
        ? QuizzyStyles.pressed_correct_option_button
        : QuizzyStyles.pressed_wrong_option_button;
    }
  };

  const continueButton = verify => {
    if (verify) {
      return {
        backgroundColor: 'green',
        borderColor: 'darkgreen',
      };
    }
    return {
      backgroundColor: '#E72929',
      borderColor: 'darkred',
    };
  };

  const explanationStyle = verify => {
    return verify
      ? QuizzyStyles.correctAnswerExplanationStyle
      : QuizzyStyles.wrongAnswerExplanation;
  };

  return (
    <View style={QuizzyStyles.container}>
      {/* This is for the progress bar
      <ProgressBar progress={currentprogress} /> */}

      {/* The question and its options in the current screen */}
      <View
        style={{justifyContent: 'center', alignItems: 'flex-start', flex: 2}}>
        {/* question view */}
        <View style={QuizzyStyles.questions_View}>
          <Text style={QuizzyStyles.questions_text_style}>
            {ReactJS_Questions[8].number}.{')'} {ReactJS_Questions[8].question}
          </Text>
        </View>
        {/* options view */}
        <View style={QuizzyStyles.optionsContainer}>
          <View style={QuizzyStyles.options_view}>
            <View style={{flexDirection: 'column'}}>
              {ReactJS_Questions[8].options.map((question, index) => (
                <View style={QuizzyStyles.individual_option_view} key={index}>
                  <TouchableOpacity
                    style={[
                      QuizzyStyles.individual_option_button,
                      styleSelectedOption(question, index),
                    ]}
                    onPress={() => handleOptionSelected(question, index)}
                    disabled={pressed}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Notosans-Regular',
                        fontSize: 15,
                      }}>
                      {question.option}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={QuizzyStyles.explanation_continue_button_container}>
        <View style={{flex: 1, padding: 10}}>
          {showContinueButton && (
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 2,
                  // bottom: 20,
                  // paddingBottom: 10,
                  // marginBottom: 20,
                  justifyContent: 'flex-end',
                }}>
                <View style={{justifyContent: 'flex-end'}}>
                  <ScrollView
                    contentContainerStyle={explanationStyle(checkOption)}>
                    <Text
                      style={{
                        // color: checkOption ? '#3DC2EC' : '#1A2130',
                        color: '#0079FF',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {checkOption
                        ? 'Yes! you got it.'
                        : "No! you didn't get it!"}
                    </Text>
                    <Text style={QuizzyStyles.explanationTextStyle}>
                      {'\n'}
                      {selectedExplanation}
                    </Text>
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  // flex: 1,
                  padding: 5,
                }}>
                <TouchableOpacity
                  style={[
                    QuizzyStyles.continueButtonStyle,
                    continueButton(checkOption),
                  ]}
                  onPress={() => Navigation.navigate('RJS screen 10')}>
                  <Text style={{color: 'white'}}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default RJS_screen9;
