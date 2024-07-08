/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
  ScrollView,
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
import {CountContext} from '../../Components/CountContext';

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
            {Questions[0].number}.{')'} {Questions[0].question}
          </Text>
        </View>
        {/* options view */}
        <View style={QuizzyStyles.optionsContainer}>
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
                  // bottom: 50,
                  padding: 5,
                }}>
                <TouchableOpacity
                  style={[
                    QuizzyStyles.continueButtonStyle,
                    continueButton(checkOption),
                  ]}
                  onPress={() => Navigation.navigate('Screen 2')}>
                  <Text style={{color: 'white'}}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
            // <View style={{flex: 1, borderWidth: 1}}>
            //   <View style={{flex: 2, justifyContent: 'flex-end'}}>
            //     <View style={{justifyContent: 'flex-end'}}>
            //       <ScrollView
            //         contentContainerStyle={{
            //           // flex: 1,
            //           padding: 10,
            //           borderColor: 'green',
            //           borderWidth: 1,
            //           backgroundColor: '#BFF6C3',
            //           borderRadius: 10,
            //           height: 'auto',
            //         }}>
            //         <Text style={{color: 'black'}}>Hi</Text>
            //       </ScrollView>
            //     </View>
            //   </View>
            //   <View
            //     style={{flex: 1, justifyContent: 'flex-end', borderWidth: 1}}>
            //     <TouchableOpacity style={{borderWidth: 1}}>
            //       <Text style={{color: 'black'}}>button</Text>
            //     </TouchableOpacity>
            //   </View>
            // </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default RNScreen;
