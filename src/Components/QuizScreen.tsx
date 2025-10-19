/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

type OpenURLButtonProps = {
  url: string;
  children: string;
};

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

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

  const Navigation = useNavigation();
  const url = 'https://react.dev/';

  // use the passed in referenceLink (from props). If it's missing, do nothing.
  const handleLink = useCallback(
    async referenceLink => {
      try {
        if (!referenceLink) {
          Alert.alert('No reference link provided');
          return;
        }

        // Ensure URL has a scheme. Linking.canOpenURL on Android/iOS requires a scheme like http:// or https://
        let link = referenceLink.trim();
        if (!/^https?:\/\//i.test(link)) {
          link = `https://${link}`;
        }

        const supported = await Linking.canOpenURL(link);
        if (supported) {
          await Linking.openURL(link);
        } else {
          Alert.alert("Can't open this URL:", link);
        }
      } catch (err: any) {
        // Generic fallback alert
        Alert.alert('Failed to open link', err?.message ?? String(err));
      }
    },
    [referenceLink],
  );

  return (
    <View style={RN_Fluid_Screen_Styles.Container}>
      <StatusBar />
      {/* <View style={RN_Fluid_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Fluid_Screen_Styles.screenTitleText}>{QuizTitle}</Text>
      </View> */}
      {/* X icon, Progress bar and heart icon */}
      <View style={RN_Fluid_Screen_Styles.X_ProgressBar_Aura_container}>
        <View style={RN_Fluid_Screen_Styles.X_Icon_View}>
          <Icon
            name="x"
            color={'grey'}
            size={30}
            onPress={() => Navigation.navigate('QuizzyMainScreen')}
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
          <View style={RN_Fluid_Screen_Styles.ResultExplanationContainer}>
            {result && (
              <>
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
                    • For further reference:{' '}
                    <Text
                      onPress={() => handleLink(referenceLink)}
                      style={RN_Fluid_Screen_Styles.LinkText}>
                      {referenceLink}
                    </Text>
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
              </>
            )}
          </View>
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
    // fontWeight: 'bold',/
    color: 'black',
    fontFamily: 'Roboto-Bold',
  },
  OptionsContainer: {
    flex: 1,
  },
  OptionView: {
    flex: 1,
    height: height / 14,
    marginTop: 10,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  OptionButtonView: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  DefaultOptionButtonStyle: {
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 6,
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
  LinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    elevation: 3,
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
    borderColor: 'rgba(0, 0, 0, 0.2)',
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
