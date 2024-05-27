import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Alert} from 'react-native';
import {QuizzyStyles} from './QuizzyStyles';

const SampleQuestion = () => {
  const [checkOption, setCheckOption] = useState(null);

  const handleOptionSelected = index => {
    setCheckOption(index);
  };

  const getButtonStyle = index => {
    if (index === checkOption) {
      return index === 3
        ? QuizzyStyles.pressed_correct_option_button
        : QuizzyStyles.pressed_wrong_option_button;
    }
  };

  return (
    <View style={QuizzyStyles.container}>
      <View style={QuizzyStyles.options_view}>
        <View style={{flexDirection: 'column'}}>
          {/* <View style={QuizzyStyles.individual_option_view}>
            <Text style={{fontSize: 18}}>a.</Text>
            <TouchableOpacity
              style={[
                QuizzyStyles.individual_option_button,
                correctOption && QuizzyStyles.pressed_correct_option_button,
              ]}
              onPress={() => handleOptionSelected('a')}>
              <Text style={{color: 'black'}}>
                {'<p>'} p tag {'</p>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={QuizzyStyles.individual_option_view}>
            <Text style={{fontSize: 18}}>b.</Text>
            <TouchableOpacity
              style={[
                QuizzyStyles.individual_option_button,
                wrongOption && QuizzyStyles.pressed_wrong_option_button,
              ]}
              onPress={() => handleOptionSelected('b')}>
              <Text style={{color: 'black'}}>
                {'<b>'} b tag {'</b>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={QuizzyStyles.individual_option_view}>
            <Text style={{fontSize: 18}}>c.</Text>
            <TouchableOpacity
              style={[
                QuizzyStyles.individual_option_button,
                wrongOption && QuizzyStyles.pressed_wrong_option_button,
              ]}
              onPress={() => handleOptionSelected('c')}>
              <Text style={{color: 'black'}}>
                {'<i>'} i tag {'</i>'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={QuizzyStyles.individual_option_view}>
            <Text style={{fontSize: 18}}>d.</Text>
            <TouchableOpacity style={QuizzyStyles.individual_option_button}>
              <Text style={{color: 'black'}}>
                {'<Text>'} Text tag {'</Text>'}
              </Text>
            </TouchableOpacity>
          </View> */}
          {[
            '<p> p tag </p>',
            '<b> b tag </b',
            '<i> i tag </i>',
            '<Text> Text tag </Text>',
          ].map((option, index) => (
            <View style={QuizzyStyles.individual_option_view} key={index}>
              <TouchableOpacity
                style={[
                  QuizzyStyles.individual_option_button,
                  getButtonStyle(index),
                ]}
                onPress={() => handleOptionSelected(index)}>
                <Text style={{color: 'black'}}>{option}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SampleQuestion;
