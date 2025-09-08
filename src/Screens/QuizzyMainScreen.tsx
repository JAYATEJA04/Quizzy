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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../lib/supabase';

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

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={styles.TitleContainer1}>
        <Text style={styles.textCC1}>{title}</Text>
      </View>
      <View
        style={{
          height: 100,
          // borderWidth: 0.2,
          elevation: 3,
          borderRadius: 8,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Your current progress.</Text>
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
            <Text style={styles.optionText}>{screen.title}</Text>
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
    color: 'black',
    fontWeight: '400',
  },
  textCC1: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'orange',
  },
  ScreeStyle: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  optionButton: {
    margin: 10,
    height: SCREEN_HEIGHT / 8,
    elevation: 3,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  optionText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'AlbertSans-Black',
  },
});

export default QuizzyMainScreen;
