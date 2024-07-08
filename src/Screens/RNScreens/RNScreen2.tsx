/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from '../../Components/ProgressBar';
import {
  currentProgress,
  decrement,
  increment,
} from '../../../redux store/features/progressBarSlice';
import {useDispatch, useSelector} from 'react-redux';
import {QuizzyStyles} from '../../Components/QuizzyStyles';
import Questions from '../../Components/Content';
import {CountContext} from '../../Components/CountContext';

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const RNScreen2 = () => {
  const Navigation = useNavigation();
  const currentprogress = useSelector(currentProgress);
  const dispatch = useDispatch();

  const [pressed, setPressed] = useState(false);
  const [checkOption, setCheckOption] = useState(false);
  const [indexOfTheOption, setIndexOfTheOption] = useState(null);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [selectedExplanation, setSelectedExplanation] = useState('');
  const {
    countCorrectOptions,
    setCountCorrectOptions,
    countWrongOptions,
    setCountWrongOptions,
  }: any = useContext(CountContext);

  const handleOptionSelected = (option, index) => {
    if (option.isItTrue) {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(true);
      setSelectedExplanation(option.explanation);
      setCountCorrectOptions(countCorrectOptions + 1);
    } else {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(false);
      setSelectedExplanation(option.explanation);
      setCountWrongOptions(countWrongOptions + 1);
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
            {Questions[1].number}.{')'} {Questions[1].question}
          </Text>
        </View>
        {/* options view */}
        <View style={QuizzyStyles.optionsContainer}>
          <View style={QuizzyStyles.options_view}>
            <View style={{flexDirection: 'column'}}>
              {Questions[1].options.map((question, index) => (
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
              <View style={{flex: 2, justifyContent: 'flex-end'}}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                  }}>
                  <ScrollView
                    contentContainerStyle={explanationStyle(checkOption)}>
                    <Text
                      style={{
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
                  padding: 5,
                  // borderWidth: 1,
                }}>
                <TouchableOpacity
                  style={[
                    QuizzyStyles.continueButtonStyle,
                    continueButton(checkOption),
                  ]}
                  onPress={() => Navigation.navigate('Screen 3')}>
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

const styles = StyleSheet.create({
  continueButtonStyle: {
    backgroundColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  correctAnswerExplanationStyle: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: '#BFF6C3',
    borderRadius: 10,
    height: 'auto',
  },
  wrongAnswerExplanation: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#FF6969',
    borderRadius: 10,
  },
});

export default RNScreen2;
