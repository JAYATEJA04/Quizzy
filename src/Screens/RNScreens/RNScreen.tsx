/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  increment,
  decrement,
  currentProgress,
} from '../../../redux store/features/progressBarSlice';
import {useDispatch, useSelector} from 'react-redux';
import {QuizzyStyles} from '../../Components/QuizzyStyles';
import Questions from '../../Components/Content';

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const RNScreen = () => {
  const Navigation = useNavigation();
  const currentprogress = useSelector(currentProgress);
  const dispatch = useDispatch();

  const [pressed, setPressed] = useState(false);
  const [checkOption, setCheckOption] = useState(false);
  const [indexOfTheOption, setIndexOfTheOption] = useState(null);
  const [showContinueButton, setShowContinueButton] = useState(false);

  const handleOptionSelected = (option, index) => {
    if (option.isItTrue) {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(true);
    } else {
      setIndexOfTheOption(index);
      setShowContinueButton(true);
      setPressed(true);
      setCheckOption(false);
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
      ? styles.correctAnswerExplanationStyle
      : styles.wrongAnswerExplanation;
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
            {Questions[0].number}.{')'} {Questions[0].question}
          </Text>
        </View>
        {/* options view */}
        <View style={QuizzyStyles.container}>
          <View style={QuizzyStyles.options_view}>
            <View style={{flexDirection: 'column'}}>
              {Questions[0].options.map((question, index) => (
                <View style={QuizzyStyles.individual_option_view} key={index}>
                  <TouchableOpacity
                    style={[
                      QuizzyStyles.individual_option_button,
                      styleSelectedOption(question, index),
                    ]}
                    onPress={() => handleOptionSelected(question, index)}
                    disabled={pressed}>
                    <Text style={{color: 'black'}}>
                      {Object.values(question)}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 2}}>
        <View style={{flex: 1, padding: 10}}>
          {showContinueButton && (
            <View style={{flex: 1}}>
              <View style={explanationStyle(checkOption)} />
              <View style={{justifyContent: 'flex-end', padding: 5}}>
                <TouchableOpacity
                  style={[
                    styles.continueButtonStyle,
                    continueButton(checkOption),
                  ]}
                  onPress={() => Navigation.navigate('Screen 2')}>
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
  },
  wrongAnswerExplanation: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#FF6969',
    borderRadius: 10,
  },
});

export default RNScreen;
