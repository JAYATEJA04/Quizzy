import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Quiz_Screen_Styles} from '../../Components/Quiz_Screen_Styles';

const Quiz_Screen = ({route}) => {
  const {
    id,
    question,
    options,
    correctAnswer,
    explanation,
    referenceLink,
    nextScreen,
    screenName,
  } = route.params;

  const [result, setResult] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const Navigation = useNavigation();

  const handleOptionSelected = option => {
    setOptionSelected(option);
    setResult(!result);
  };

  const getColorByScreenName = screenName => {
    if (screenName === 'React Native') {
      return 'lightblue';
    } else if (screenName === 'React JS') {
      return 'lightblue';
    } else if (screenName === 'JavaScript') {
      return '#FFD35A';
    } else if (screenName === 'TypeScript') {
      return '#3178C6';
    } else if (screenName === 'JAVA') {
      return '#E11F21';
    }
  };

  return (
    <View style={Quiz_Screen_Styles.container}>
      <View style={Quiz_Screen_Styles.TitleOnTopView}>
        <Text
          style={[
            Quiz_Screen_Styles.TitleOnTopTextStyle,
            {color: getColorByScreenName(screenName)},
          ]}>
          {screenName}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={
          Quiz_Screen_Styles.ScrollView_ContentContainerStyle
        }>
        <View style={Quiz_Screen_Styles.ProgressBarView} />
        <View style={Quiz_Screen_Styles.Question_View}>
          <Text style={Quiz_Screen_Styles.Question_Text_Style}>
            {id}
            {'.)'} {question}
          </Text>
        </View>
        {options.map((option, index) => (
          <View key={index} style={Quiz_Screen_Styles.Options_View}>
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
            <View
              style={
                optionSelected === correctAnswer
                  ? Quiz_Screen_Styles.correctAnswerExplanation
                  : Quiz_Screen_Styles.wrongAnswerExplanation
              }>
              <View style={Quiz_Screen_Styles.defaultExplanationView}>
                <Text style={Quiz_Screen_Styles.BulletPointStyle}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={Quiz_Screen_Styles.ExplanationTextStyle}>
                  {explanation}
                </Text>
              </View>
              <View style={Quiz_Screen_Styles.defaultExplanationView}>
                <Text style={Quiz_Screen_Styles.BulletPointStyle}>
                  {'\u2022'}{' '}
                </Text>
                <Text style={Quiz_Screen_Styles.ExplanationTextStyle}>
                  For further reference:{' '}
                  <Text
                    onPress={() => Alert.alert('YAYYY! you pressed a weblink!')}
                    style={Quiz_Screen_Styles.ReferenceLinkStyle}>
                    {referenceLink}
                  </Text>
                </Text>
              </View>
            </View>
            {nextScreen ? (
              <View style={Quiz_Screen_Styles.ContinueButtonView}>
                <TouchableOpacity
                  style={
                    optionSelected === correctAnswer
                      ? Quiz_Screen_Styles.continueButtonIfCorrect
                      : Quiz_Screen_Styles.continueButtonIfWrong
                  }
                  onPress={() => Navigation.navigate(nextScreen)}>
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

export default Quiz_Screen;
