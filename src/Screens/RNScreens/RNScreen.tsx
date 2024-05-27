/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  increment,
  decrement,
  currentProgress,
} from '../../../redux store/features/progressBarSlice';
import {useDispatch, useSelector} from 'react-redux';
import { QuizzyStyles } from '../../Components/QuizzyStyles';
import SampleQuestion from '../../Components/SampleQ';

const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const RNScreen = () => {
  const Navigation = useNavigation();
  const currentprogress = useSelector(currentProgress);
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);

  const handleForwardProgressBar = () => {
    if (progress < 100) {
      dispatch(increment());
      Navigation.navigate('Screen 2');
    }
  };

  const handleBackwardProgressBar = () => {
    dispatch(decrement());
    Navigation.navigate('Screen 1');
  };

  return (
    <View style={RN_SCREEN_Styles.container}>
      {/* This is for the progress bar
      <View style={RN_SCREEN_Styles.progressBarView}>
        <View style={RN_SCREEN_Styles.progressBarStyle} />
      </View>
      <ProgressBar progress={currentprogress} /> */}

      {/* The question and its options in the current screen */}
      <View style={{}}>
        {/* question view */}
        <View style={RN_SCREEN_Styles.questions_View}>
          <Text style={RN_SCREEN_Styles.questions_text_style}>
            Q{'.)'} If I want to write a sentence, which component should I use.
          </Text>
        </View>
        {/* options view */}
        <SampleQuestion />
        {/* end of options view */}

        {/* forward and previous button */}
        <View style={RN_SCREEN_Styles.previous_forward_button_view}>
          {/* previous button view */}
          <View style={RN_SCREEN_Styles.previous_button_view}>
            <TouchableOpacity style={RN_SCREEN_Styles.previous_button_style}>
              <Text style={RN_SCREEN_Styles.previous_button_text}>{'<-'}</Text>
            </TouchableOpacity>
          </View>
          {/* forward button view */}

          <View style={RN_SCREEN_Styles.forward_button_view}>
            <TouchableOpacity
              style={RN_SCREEN_Styles.forward_button_style}
              onPress={() => handleForwardProgressBar()}>
              <Text style={RN_SCREEN_Styles.forward_button_text}>{'->'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const RN_SCREEN_Styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#040D12',
  },
  options_view: {
    height: SCREEN_HEIGHT / 2,
    width: '100%',
  },
  individual_option_view: {
    height: SCREEN_HEIGHT / 4,
    width: '50%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  individual_option_button: {
    height: SCREEN_HEIGHT / 7,
    width: '70%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  previous_forward_button_view: {
    top: SCREEN_HEIGHT / 2,
    width: '100%',
    padding: 20,
    // borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  previous_button_view: {
    // borderWidth: 1,
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

export default RNScreen;
