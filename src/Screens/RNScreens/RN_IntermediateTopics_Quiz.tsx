/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const RN_MidLevel_quiz = ({route}) => {
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

  const verifyStyle = () => {};

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#58C4DC',
            fontFamily: 'Poppins-Bold',
          }}>
          ReactNative
        </Text>
      </View>
      <ScrollView style={{padding: 10}} contentContainerStyle={{flex: 1}}>
        <View style={{paddingTop: 45, borderWidth: 1}} />
        <View style={{padding: 5, marginBottom: 5}}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            {id}
            {'.)'} {question}
          </Text>
        </View>
        {options.map((option, index) => (
          <View key={index} style={{marginTop: 5}}>
            <TouchableOpacity
              style={[
                RN_IntermediateTopics_Quiz_Screen_Styles.defaultOptionButtonStyle,
                optionSelected === option
                  ? option === correctAnswer
                    ? RN_IntermediateTopics_Quiz_Screen_Styles.correctOptionButtonStyle
                    : RN_IntermediateTopics_Quiz_Screen_Styles.wrongOptionButtonStyle
                  : null,
              ]}
              onPress={() => handleOptionSelected(option)}>
              <Text style={{color: 'black', fontSize: 16}}>{option}</Text>
            </TouchableOpacity>
          </View>
        ))}
        {result && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginTop: 10,
              // borderWidth: 1,
            }}>
            <View
              style={
                optionSelected === correctAnswer
                  ? RN_IntermediateTopics_Quiz_Screen_Styles.correctAnswerExplanation
                  : RN_IntermediateTopics_Quiz_Screen_Styles.wrongAnswerExplanation
              }>
              <View
                style={
                  RN_IntermediateTopics_Quiz_Screen_Styles.defaultExplanationView
                }>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  {explanation}
                </Text>
              </View>
              <View
                style={
                  RN_IntermediateTopics_Quiz_Screen_Styles.defaultExplanationView
                }>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  For further reference:{' '}
                  <Text
                    onPress={() => Alert.alert('YAYYY! you pressed a weblink!')}
                    style={{color: 'blue', textDecorationLine: 'underline'}}>
                    {referenceLink}
                  </Text>
                </Text>
              </View>
            </View>
            {nextScreen ? (
              <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 10}}>
                <TouchableOpacity
                  style={
                    optionSelected === correctAnswer
                      ? RN_IntermediateTopics_Quiz_Screen_Styles.continueButtonIfCorrect
                      : RN_IntermediateTopics_Quiz_Screen_Styles.continueButtonIfWrong
                  }
                  onPress={() => Navigation.navigate(nextScreen)}>
                  <Text style={{fontSize: 30, color: 'black'}}>Continue</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={{color: 'black', fontSize: 30}}>tHE END!</Text>
            )}
          </View>
        )}
        {/* <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 5,
            // borderWidth: 1,
          }}>
          <View
            style={{
              flex: 1,
              padding: 10,
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 16}}>
              How can you access device information in React Native? a Using the
              Device API b Using the Platform API c Using the DeviceInfo module
              from react-native-device-info d Using the SystemInfo API
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                height: 70,
                width: '100%',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 30, color: 'black'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

const RN_IntermediateTopics_Quiz_Screen_Styles = StyleSheet.create({
  defaultOptionButtonStyle: {
    height: 60,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 30,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  correctOptionButtonStyle: {
    height: 60,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 30,
    backgroundColor: '#C7FFB7',
    borderColor: 'rgba(199, 255, 183, 0.2)',
  },
  wrongOptionButtonStyle: {
    height: 60,
    borderRadius: 8,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 30,
    backgroundColor: '#FFC5B2',
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
  defaultExplanationView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  correctAnswerExplanation: {
    flex: 1,
    padding: 10,
    height: 'auto',
    // marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#C7FFB7',
    borderColor: 'rgba(147, 250, 165, 0.8)',
  },
  wrongAnswerExplanation: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFC5B2',
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
  continueButtonIfCorrect: {
    height: 70,
    width: '100%',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#6FE427',
    borderRadius: 8,
    borderColor: 'rgba(111, 228, 39, 0.8)',
  },
  continueButtonIfWrong: {
    height: 70,
    width: '100%',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#FF2A12',
    borderRadius: 8,
    borderColor: 'rgba(250, 0, 0, 0.2)',
  },
});
export default RN_MidLevel_quiz;
