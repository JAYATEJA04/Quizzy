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
import {QuizzyStyles} from '../../Components/QuizzyStyles';
import SampleQuestion from '../../Components/SampleQ';
import Questions from '../../Components/Content';

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
    <View style={QuizzyStyles.container}>
      {/* This is for the progress bar
      <ProgressBar progress={currentprogress} /> */}

      {/* The question and its options in the current screen */}
      <View style={{}}>
        {/* question view */}
        <View style={QuizzyStyles.questions_View}>
          <Text style={QuizzyStyles.questions_text_style}>
            {Questions[0].question}
          </Text>
        </View>
        {/* options view */}
        <SampleQuestion />
        {/* end of options view */}

        {/* forward and previous button */}
        <View style={QuizzyStyles.previous_forward_button_view}>
          {/* previous button view */}
          {/* <View style={QuizzyStyles.previous_button_view}>
            <TouchableOpacity style={QuizzyStyles.previous_button_style}>
              <Text style={QuizzyStyles.previous_button_text}>{'<-'}</Text>
            </TouchableOpacity>
          </View> */}
          {/* forward button view */}

          {/* <View style={QuizzyStyles.forward_button_view}>
            <TouchableOpacity
              style={QuizzyStyles.forward_button_style}
              onPress={() => handleForwardProgressBar()}>
              <Text style={QuizzyStyles.forward_button_text}>{'->'}</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default RNScreen;
