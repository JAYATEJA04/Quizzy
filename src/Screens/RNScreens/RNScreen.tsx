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

  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(false);
  const [indexOfTheOption, setIndexOfTheOption] = useState(null);

  const handleOptionSelected = (option, index) => {
    if (option.isItTrue) {
      setSelectedOption(true);
      setIndexOfTheOption(index);
    } else {
      setSelectedOption(false);
      setIndexOfTheOption(index);
    }
  };

  const styleSelectedOption = (question, index) => {
    if (indexOfTheOption === index) {
      return question.isItTrue
        ? QuizzyStyles.pressed_correct_option_button
        : QuizzyStyles.pressed_wrong_option_button;
    }
  };

  return (
    <View style={QuizzyStyles.container}>
      {/* This is for the progress bar
      <ProgressBar progress={currentprogress} /> */}

      {/* The question and its options in the current screen */}
      <View style={{}}>
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
                    onPress={() => handleOptionSelected(question, index)}>
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
    </View>
  );
};

export default RNScreen;
