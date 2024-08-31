import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {ReactNative_Quiz_Screen_Styles} from '../../Components/ReactNative_Components/ReactNative_Quiz_Screen_Styles';

const ReactJS_Quiz_Screen = ({route}) => {
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

  const handleOptionSelected = option => {
    setOptionSelected(option);
    setResult(!result);
  };

  return (
    <View style={ReactNative_Quiz_Screen_Styles.container}>
      <View style={ReactNative_Quiz_Screen_Styles.TitleOnTopView}>
        <Text style={ReactNative_Quiz_Screen_Styles.TitleOnTopTextStyle}>
          ReactJS
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={
          ReactNative_Quiz_Screen_Styles.ScrollView_ContentContainerStyle
        }>
        <View style={ReactNative_Quiz_Screen_Styles.ProgressBarView} />
        <View style={ReactNative_Quiz_Screen_Styles.Question_View}>
          <Text style={ReactNative_Quiz_Screen_Styles.Question_Text_Style}>
            {id}
            {'.)'} {question}
          </Text>
        </View>
        {options.map((option, index) => (
          <View key={index} style={ReactNative_Quiz_Screen_Styles.Options_View}>
            <TouchableOpacity
              style={[
                ReactNative_Quiz_Screen_Styles.defaultOptionButtonStyle,
                optionSelected === option
                  ? option === correctAnswer
                    ? ReactNative_Quiz_Screen_Styles.correctOptionButtonStyle
                    : ReactNative_Quiz_Screen_Styles.wrongOptionButtonStyle
                  : null,
              ]}
              onPress={() => handleOptionSelected(option)}>
              <Text style={ReactNative_Quiz_Screen_Styles.Options_Text_Style}>
                {option}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        {result && (
          <View
            style={
              ReactNative_Quiz_Screen_Styles.Explanation_ContinueButton_View
            }>
            <View
              style={
                optionSelected === correctAnswer
                  ? ReactNative_Quiz_Screen_Styles.correctAnswerExplanation
                  : ReactNative_Quiz_Screen_Styles.wrongAnswerExplanation
              }>
              <View
                style={ReactNative_Quiz_Screen_Styles.defaultExplanationView}>
                <Text style={ReactNative_Quiz_Screen_Styles.BulletPointStyle}>
                  {'\u2022'}{' '}
                </Text>
                <Text
                  style={ReactNative_Quiz_Screen_Styles.ExplanationTextStyle}>
                  {explanation}
                </Text>
              </View>
              <View
                style={ReactNative_Quiz_Screen_Styles.defaultExplanationView}>
                <Text style={ReactNative_Quiz_Screen_Styles.BulletPointStyle}>
                  {'\u2022'}{' '}
                </Text>
                <Text
                  style={ReactNative_Quiz_Screen_Styles.ExplanationTextStyle}>
                  For further reference:{' '}
                  <Text
                    onPress={() => Alert.alert('YAYYY! you pressed a weblink!')}
                    style={ReactNative_Quiz_Screen_Styles.ReferenceLinkStyle}>
                    {referenceLink}
                  </Text>
                </Text>
              </View>
            </View>
            {nextScreen ? (
              <View style={ReactNative_Quiz_Screen_Styles.ContinueButtonView}>
                <TouchableOpacity
                  style={
                    optionSelected === correctAnswer
                      ? ReactNative_Quiz_Screen_Styles.continueButtonIfCorrect
                      : ReactNative_Quiz_Screen_Styles.continueButtonIfWrong
                  }
                  onPress={() => Navigation.navigate(nextScreen)}>
                  <Text
                    style={
                      ReactNative_Quiz_Screen_Styles.ContinueButtonTextStyle
                    }>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={ReactNative_Quiz_Screen_Styles.TheEndTextStyle}>
                tHE END!
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ReactJS_Quiz_Screen;
