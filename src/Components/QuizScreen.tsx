import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height} = Dimensions.get('window');

const QuizScreen = ({
  QuizTitle,
  questionCount,
  quizQuestions,
  optionSelected,
  correctAnswer,
  handleOptionSelected,
  disableOption,
  handleContinueButton,
  explanation,
  referenceLink,
  result,
}: any) => {
  console.log('hello', disableOption);

  const width = useSharedValue<number>(100);
  const translateX = useSharedValue<number>(0);

  const handlePress = () => {
    translateX.value += 50;
  };
  // console.log(width.value);

  const handleReset = () => {
    translateX.value = 0;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));

  return (
    <View style={RN_Fluid_Screen_Styles.Container}>
      <StatusBar />
      {/* <View style={RN_Fluid_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Fluid_Screen_Styles.screenTitleText}>{QuizTitle}</Text>
      </View> */}
      {/* X icon, Progress bar and heart icon */}
      <Animated.View
        style={[animatedStyle, {width, height: 100, backgroundColor: 'violet'}]}
      />
      <Button onPress={handlePress} title="Click me" />
      <Button onPress={handleReset} title="Reset me" />
      {/* <View style={RN_Fluid_Screen_Styles.X_ProgressBar_Aura_container}>
        
        <View style={RN_Fluid_Screen_Styles.X_Icon_View}>
          <Icon
            name="x"
            color={'grey'}
            size={30}
            onPress={() => Alert.alert('hey!')}
          />
        </View>
        <View style={RN_Fluid_Screen_Styles.ProgressBar_View}>
          <ProgressBar />
        </View>
        <View style={RN_Fluid_Screen_Styles.HeartIcon_View}>
          <Icon name="heart" size={30} color={'red'} solid />
        </View>
      </View> */}
      {/* The question view */}
      {/* <View style={RN_Fluid_Screen_Styles.QuestionContainer}>
        <Text style={RN_Fluid_Screen_Styles.QuestionText}>
          {quizQuestions[questionCount].question}
        </Text>
        <View style={RN_Fluid_Screen_Styles.OptionsContainer}>
          {quizQuestions[questionCount].options.map((option, index) => (
            <View key={index} style={RN_Fluid_Screen_Styles.OptionView}>
              <View style={RN_Fluid_Screen_Styles.OptionNumberView}>
                <Text style={RN_Fluid_Screen_Styles.OptionNumberText}>
                  {index + 1}
                  {'.)'}
                </Text>
              </View>
              <View style={RN_Fluid_Screen_Styles.OptionButtonView}>
                <TouchableOpacity
                  style={[
                    RN_Fluid_Screen_Styles.DefaultOptionButtonStyle,
                    optionSelected === option.optionId
                      ? option.optionId === correctAnswer
                        ? RN_Fluid_Screen_Styles.CorrectOptionButtonStyle
                        : RN_Fluid_Screen_Styles.WrongOptionButtonStyle
                      : null,
                  ]}
                  onPress={() => handleOptionSelected(option)}
                  disabled={disableOption}>
                  <Text style={RN_Fluid_Screen_Styles.OptionText}>
                    {option.optionText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          {result && (
            <View style={RN_Fluid_Screen_Styles.ResultExplanationContainer}>
              <View
                style={
                  optionSelected === correctAnswer
                    ? RN_Fluid_Screen_Styles.CorrectAnswerExplanation
                    : RN_Fluid_Screen_Styles.WrongAnserExplanation
                }>
                <Text style={RN_Fluid_Screen_Styles.ExplanationText}>
                  • {explanation}
                </Text>
                <Text style={RN_Fluid_Screen_Styles.ExplanationText}>
                  • For further reference: {referenceLink}
                </Text>
              </View>
              <TouchableOpacity
                style={
                  optionSelected === correctAnswer
                    ? RN_Fluid_Screen_Styles.ContinueButtonIfCorrect
                    : RN_Fluid_Screen_Styles.ContinueButtonIfWrong
                }
                onPress={() => handleContinueButton()}>
                <Text style={RN_Fluid_Screen_Styles.ContinueButtonText}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View> */}
    </View>
  );
};

const RN_Fluid_Screen_Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 24,
    color: '#D7BC39',
    fontFamily: 'Montserrat-Bold',
  },
  X_ProgressBar_Aura_container: {
    height: height / 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  X_Icon_View: {
    flex: 1,
  },
  ProgressBar_View: {
    flex: 8,
    width: 500,
    marginLeft: 5,
    marginRight: 5,
  },
  HeartIcon_View: {
    flex: 1,
    width: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  QuestionContainer: {
    flex: 1,
  },
  QuestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  OptionsContainer: {
    flex: 1,
  },
  OptionView: {
    height: height / 14,
    marginTop: 10,
    flexDirection: 'row',
  },
  OptionNumberView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OptionNumberText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  OptionButtonView: {
    flex: 7,
  },
  DefaultOptionButtonStyle: {
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  CorrectOptionButtonStyle: {
    backgroundColor: '#C7FFB7',
  },
  WrongOptionButtonStyle: {
    backgroundColor: '#FFC5B2',
  },
  OptionText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  ResultExplanationContainer: {
    flex: 1,
    height: height / 2,
    borderRadius: 8,
    marginTop: 10,
  },
  CorrectAnswerExplanation: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#C7FFB7',
    borderColor: 'rgba(147, 250, 165, 0.8)',
  },
  WrongAnserExplanation: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFC5B2',
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
  ExplanationText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Montserrat-SemiBold',
  },
  ContinueButtonIfCorrect: {
    height: height / 14,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    elevation: 3,
    backgroundColor: '#6FE427',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContinueButtonIfWrong: {
    height: height / 14,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#FF2A12',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContinueButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default QuizScreen;
