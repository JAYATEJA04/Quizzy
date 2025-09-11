/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../lib/supabase';
import Topic_ProgressBar from '../Components/Topic_ProgressBar';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type ScreenItem = {
  name: string;
  title: string;
};

type QuizzyMainScreenProps = {
  title: string;
  screens: ScreenItem[];
};

const QuizzyMainScreen: React.FC<QuizzyMainScreenProps> = ({
  title,
  screens,
}) => {
  const navigation = useNavigation();
  //   console.log(screens.name);
  console.log(title);

  const getImageSource = (name: string) => {
    switch (name) {
      case 'ReactNativeScreen':
        return require('../../assets/Images/ReactNative_logo.png');
      case 'ReactJSScreen':
        return require('../../assets/Images/React_logo.png');
      case 'JavaScriptScreen':
        return require('../../assets/Images/JS_logo.png');
      case 'TypeScriptScreen':
        return require('../../assets/Images/typescript_logo.png');
      case 'JAVAScreen':
        return require('../../assets/Images/java_logo.png');
      default:
        return require('../../assets/Images/jsintro.png');
    }
  };

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={styles.TitleContainer1}>
        <Text style={styles.textCC1}>{title}</Text>
      </View>
      <View
        style={{
          height: SCREEN_HEIGHT / 4,
          // borderWidth: 0.2,
          elevation: 5,
          borderRadius: 20,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 40, textAlign: 'left'}}>
          Your current progress.
        </Text>
      </View>
      <View style={styles.childContainer2}>
        <Text style={styles.ChooseOptionsStyle}>Choose your quiz.</Text>
      </View>
      {screens.map((screen, index) => (
        <View key={index} style={styles.ScreeStyle}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate(screen.name)}>
            {/* onPress={() => navigation.navigate('Dashboard')}> */}
            {/* {console.log(screen.name)} */}
            {/* <Image
              style={{
                position: 'absolute',
                resizeMode: 'cover',
                height: SCREEN_HEIGHT / 8,
                width: '50%',
                alignSelf: 'flex-end',
              }}
              source={getImageSource(screen.name)}
            /> */}
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.optionText}>{screen.title}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Topic_ProgressBar />
              <Topic_ProgressBar />
              <Topic_ProgressBar />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F3F8FF',
  },
  TitleContainer1: {
    // borderWidth: 1,
    // height: 'auto',
    flex: 1,
    // padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  childContainer2: {
    margin: 5,
    height: 'auto',
  },
  ChooseOptionsStyle: {
    // fontFamily: ,
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  textCC1: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'orange',
  },
  ScreeStyle: {
    overflow: 'hidden',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  optionButton: {
    margin: 10,
    height: SCREEN_HEIGHT / 8,
    // width: '95%',
    elevation: 3,
    padding: 10,
    borderRadius: 5,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    shadowColor: 'green',
    tintColor: 'red',
  },
  optionText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

export default QuizzyMainScreen;
