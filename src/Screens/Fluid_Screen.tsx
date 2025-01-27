import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ProgressBar from '../Components/ProgressBar';
import {useDispatch} from 'react-redux';
import {
  decrement,
  increment,
} from '../../redux store/features/progressBarSlice';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

const Fluid_Screen = ({route}) => {
  const {quizQuestions, QuizTitle, baseUrl} = route.params;
  const [questionCount, setQuestionCount] = useState(0);
  const [result, setResult] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);
  const [disableOption, setDisableOption] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isQuizInProgress = useState(true);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        const action = e.data.action;

        const handleGoingBack = () => {
          setQuestionCount(0);
          dispatch(decrement());
          navigation.dispatch(action);
        };

        e.preventDefault();

        Alert.alert('Quit Quiz?', 'Are you sure you want to quit the quiz?', [
          {text: "Don't leave", style: 'cancel', onPress: () => {}},
          {
            text: 'Leave',
            style: 'destructive',
            onPress: () => handleGoingBack(),
          },
        ]);
      }),
    [navigation],
  );

  const handleOptionSelected = async (option: any) => {
    setOptionSelected(option.optionId);
    setResult(!result);
    setDisableOption(!disableOption);

    await storeSelectedOption(option);
  };

  const storeSelectedOption = async (option: any) => {
    try {
      const url = `${baseUrl}/quiz/${QuizTitle}/fundamentals/${
        questionCount + 1
      }/answer`;
      console.log(url);
      const responseExpected = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: quizQuestions[questionCount].id,
          selectedOption: option,
        }),
      });
      if (!responseExpected.ok) {
        throw new Error(`HTTP error: ${responseExpected.status}`);
      }

      const data = await responseExpected.json();
      console.log('Option stored successfully:', data);
    } catch (error) {
      console.log(`Error storing selected option: ${error}`);
    }
  };

  const handleContinueButton = () => {
    if (questionCount + 1 < quizQuestions.length) {
      setQuestionCount(questionCount + 1);
      dispatch(increment());
      setOptionSelected(null);
      setResult(false);
      setDisableOption(false);
    } else {
      Alert.alert('The end bro!');
      setQuestionCount(0);
      dispatch(decrement());
      setOptionSelected(null);
      setResult(false);
      setDisableOption(false);
    }
  };

  const correctAnswer = quizQuestions[questionCount].correctAnswer;
  const explanation = quizQuestions[questionCount].explanation;
  const referenceLink = quizQuestions[questionCount].referenceLink;

  return (
    <View style={RN_Fluid_Screen_Styles.Container}>
      <StatusBar backgroundColor={'black'} />
      <View style={RN_Fluid_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Fluid_Screen_Styles.screenTitleText}>{QuizTitle}</Text>
      </View>
      {/* X icon, Progress bar and heart icon */}
      <View style={RN_Fluid_Screen_Styles.X_ProgressBar_Aura_container}>
        <View style={RN_Fluid_Screen_Styles.X_Icon_View}>
          <Icon
            name="x"
            color={'black'}
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
      </View>
      {/* The question view */}
      <View style={RN_Fluid_Screen_Styles.QuestionContainer}>
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
      </View>
    </View>
  );
};

const RN_Fluid_Screen_Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
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
    flex: 10,
    width: 500,
    marginLeft: 10,
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

export default Fluid_Screen;
