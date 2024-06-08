import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Alert} from 'react-native';
import {QuizzyStyles} from './QuizzyStyles';
import Questions from './Content';

const SampleQuestion = () => {
  const [checkOption, setCheckOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelected = option => {
    if (option.isItTrue) {
      Alert.alert('True');
    } else {
      Alert.alert('False');
    }
  };

  const getButtonStyle = (verify, index) => {
    if (index === checkOption) {
      return verify
        ? QuizzyStyles.pressed_correct_option_button
        : QuizzyStyles.pressed_wrong_option_button;
    }
  };

  const options = [
    {option: 'a', text: '<p> p tag </p>', isItTrue: false},
    {option: 'b', text: '<b> b tag </b>', isItTrue: false},
    {option: 'c', text: '<i> i tag </i>', isItTrue: false},
    {option: 'd', text: '<Text> Text tag </Text>', isItTrue: true},
  ];

  return (
    <View style={QuizzyStyles.container}>
      <View style={QuizzyStyles.options_view}>
        <View style={{flexDirection: 'column'}}>
          {Questions[0].options.map((question, index) => (
            <View style={QuizzyStyles.individual_option_view} key={index}>
              <TouchableOpacity
                style={[
                  QuizzyStyles.individual_option_button,
                  selectedOption === question && {backgroundColor: 'gray'},
                ]}
                onPress={() => handleOptionSelected(question)}>
                <Text style={{color: 'black'}}>
                  {Object.values(question)[0]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SampleQuestion;
