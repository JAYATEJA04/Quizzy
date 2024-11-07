/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Quiz_Screen_Styles} from '../../Components/Quiz_Screen_Styles';
import ProgressBar from '../../Components/ProgressBar';
import {useDispatch} from 'react-redux';
import {
  decrement,
  increment,
} from '../../../redux store/features/progressBarSlice';

const RN_Quiz_Screen = ({route}: any) => {
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
  const dispatch = useDispatch();

  const handleOptionSelected = option => {
    setOptionSelected(option);
    setResult(!result);
  };

  const handleContinueButton = () => {
    Navigation.navigate(nextScreen);
    dispatch(increment());
  };

  useEffect(() => {
    const unsubscribe = Navigation.addListener('beforeRemove', e => {
      e.preventDefault();

      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure you want to discard them and leave the screen?',
        [
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => {
              unsubscribe(); // Temporarily remove the 'beforeRemove' listener
              dispatch(decrement());
              Navigation.navigate('ReactNative Main Screen');
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {},
          },
        ],
      );
    });

    return () => {
      unsubscribe();
    };
  }, [Navigation]);

  return (
    <View style={Quiz_Screen_Styles.container}>
      <View style={Quiz_Screen_Styles.TitleOnTopView}>
        <Text style={Quiz_Screen_Styles.TitleOnTopTextStyle}>ReactNative</Text>
      </View>
      <ScrollView
        contentContainerStyle={
          Quiz_Screen_Styles.ScrollView_ContentContainerStyle
        }>
        <View
          style={{
            // flex: 1,
            height: 45,
            justifyContent: 'center',
            // borderWidth: 1,
          }}>
          <View style={Quiz_Screen_Styles.ProgressBarView}>
            <ProgressBar />
          </View>
        </View>
        <View style={Quiz_Screen_Styles.Question_View}>
          <Text style={Quiz_Screen_Styles.Question_Text_Style}>
            {id}
            {'.)'} {question}
          </Text>
        </View>
        {options.map((option: any, index: number) => (
          <View key={index * 1} style={Quiz_Screen_Styles.Options_View}>
            <TouchableOpacity
              style={[
                Quiz_Screen_Styles.defaultOptionButtonStyle,
                optionSelected === option
                  ? option === correctAnswer
                    ? Quiz_Screen_Styles.correctOptionButtonStyle
                    : Quiz_Screen_Styles.wrongOptionButtonStyle
                  : null,
              ]}
              onPress={() => handleOptionSelected(option)}>
              <Text style={Quiz_Screen_Styles.Options_Text_Style}>
                {option}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        {result && (
          <View style={Quiz_Screen_Styles.Explanation_ContinueButton_View}>
            <View style={{flex: 3}}>
              <ScrollView
                style={
                  optionSelected === correctAnswer
                    ? Quiz_Screen_Styles.correctAnswerExplanation
                    : Quiz_Screen_Styles.wrongAnswerExplanation
                }>
                <View style={Quiz_Screen_Styles.defaultExplanationView}>
                  {/* <Text style={Quiz_Screen_Styles.BulletPointStyle}>
                  </Text> */}
                  <Text style={Quiz_Screen_Styles.ExplanationTextStyle}>
                    • {explanation}
                  </Text>
                </View>
                <View style={Quiz_Screen_Styles.defaultExplanationView}>
                  <Text style={Quiz_Screen_Styles.BulletPointStyle}>
                    {'\u2022'}{' '}
                  </Text>
                  <Text style={Quiz_Screen_Styles.ExplanationTextStyle}>
                    For further reference:{' '}
                    <Text
                      onPress={() =>
                        Alert.alert('YAYYY! you pressed a weblink!')
                      }
                      style={Quiz_Screen_Styles.ReferenceLinkStyle}>
                      {referenceLink}
                    </Text>
                  </Text>
                </View>
              </ScrollView>
            </View>
            {nextScreen ? (
              <View style={Quiz_Screen_Styles.ContinueButtonView}>
                <TouchableOpacity
                  style={
                    optionSelected === correctAnswer
                      ? Quiz_Screen_Styles.continueButtonIfCorrect
                      : Quiz_Screen_Styles.continueButtonIfWrong
                  }
                  onPress={() => handleContinueButton()}>
                  <Text style={Quiz_Screen_Styles.ContinueButtonTextStyle}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={Quiz_Screen_Styles.TheEndTextStyle}>tHE END!</Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RN_Quiz_Screen;
