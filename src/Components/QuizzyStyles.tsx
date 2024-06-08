import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export const QuizzyStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  progressBarView: {
    padding: 10,
  },
  progressBarStyle: {
    height: 20,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#4FE936',
  },
  questions_View: {
    paddingLeft: 5,
  },
  questions_text_style: {
    alignSelf: 'auto',
    fontFamily: 'AlbertSans-Black',
    fontSize: 16,
    color: 'black',
  },
  options_view: {
    // height: SCREEN_HEIGHT / 2,
    height: 4 * (SCREEN_HEIGHT / 10),
    width: '100%',
    // borderWidth: 1,
  },
  individual_option_view: {
    height: SCREEN_HEIGHT / 10,
    width: '100%',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  individual_option_button: {
    height: SCREEN_HEIGHT / 16,
    padding: 10,
    width: '100%',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#D5D5D5',
  },
  pressed_correct_option_button: {
    borderColor: '#006769',
    backgroundColor: '#9DDE8B',
  },
  pressed_wrong_option_button: {
    borderColor: '#C40C0C',
    backgroundColor: '#FF0000',
  },
  previous_forward_button_view: {
    top: SCREEN_HEIGHT / 2.5,
    width: '100%',
    padding: 20,
    // borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  previous_button_view: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  previous_button_style: {
    height: 50,
    width: 80,
    // borderWidth: 1,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D5D5D5',
  },
  previous_button_text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  forward_button_view: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  forward_button_style: {
    height: 50,
    width: 80,
    // borderWidth: 1,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D5D5D5',
  },
  forward_button_text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
});
