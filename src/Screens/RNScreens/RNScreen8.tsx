/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
  Platform,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from '../../Components/ProgressBar';
import { currentProgress, decrement, increment } from '../../../redux store/features/progressBarSlice';
import { useDispatch, useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const RNScreen8 = () => {
  const Navigation = useNavigation();
  const currentprogress = useSelector(currentProgress);
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);

  const handleForwardProgressBar = () => {
    if (progress < 100) {
      dispatch(increment());
      Navigation.navigate('Screen 9');
    }
  };

  const handleBackwardProgressBar = () => {
    dispatch(decrement());
    Navigation.navigate('Screen 7');
  };

  return (
    <View style={RN_SCREEN_Styles.container}>
      {/* This is for the progress bar */}
      {/* <View style={RN_SCREEN_Styles.progressBarView}>
        <View style={RN_SCREEN_Styles.progressBarStyle} />
      </View> */}
      <ProgressBar progress={currentprogress} />

      {/* The question and its options in the current screen */}
      <View style={{}}>
        {/* question view */}
        <View style={RN_SCREEN_Styles.questions_View}>
          <Text style={RN_SCREEN_Styles.questions_text_style}>
            Q{'.)'} What is the use case of ActivityIndicator in React Native?
          </Text>
        </View>
        {/* options view */}
        <View style={RN_SCREEN_Styles.options_view}>
          {/* 1st row of options */}
          <View style={{flexDirection: 'row'}}>
            {/* option 1st */}
            <View style={RN_SCREEN_Styles.individual_option_view}>
              <TouchableOpacity
                style={RN_SCREEN_Styles.individual_option_button}>
                <Text style={{color: 'black'}}>
                  To display a circular loading activity
                </Text>
              </TouchableOpacity>
            </View>
            {/* option 2nd */}
            <View style={RN_SCREEN_Styles.individual_option_view}>
              <TouchableOpacity
                style={RN_SCREEN_Styles.individual_option_button}>
                <Text style={{color: 'black'}}>
                  To display a progress bar activity
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* end of 1st row of options */}

          {/* 2nd row of options */}
          <View style={{flexDirection: 'row'}}>
            <View style={RN_SCREEN_Styles.individual_option_view}>
              <TouchableOpacity
                style={RN_SCREEN_Styles.individual_option_button}>
                <Text style={{color: 'black'}}>To open the app</Text>
              </TouchableOpacity>
            </View>
            <View style={RN_SCREEN_Styles.individual_option_view}>
              <TouchableOpacity
                style={RN_SCREEN_Styles.individual_option_button}>
                <Text style={{color: 'black'}}>To exit the app</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* end of 2nd row of options */}
        </View>
        {/* end of options view */}

        {/* forward and previous button */}
        <View style={RN_SCREEN_Styles.previous_forward_button_view}>
          {/* previous button view */}
          <View style={RN_SCREEN_Styles.previous_button_view}>
            <TouchableOpacity
              style={RN_SCREEN_Styles.previous_button_style}
              onPress={() => handleBackwardProgressBar()}>
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
    fontFamily: 'AlbertSans-Black',
    fontSize: 16,
    color: 'black',
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
    height: SCREEN_HEIGHT / 8,
    width: '100%',
    flexDirection: 'row',
  },
  previous_button_view: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  previous_button_style: {
    height: 50,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  previous_button_text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  forward_button_view: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  forward_button_style: {
    height: 50,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  forward_button_text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
});

export default RNScreen8;
