/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
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
  console.log(title);

  const getImageSource = (name: string) => {
    switch (name) {
      case 'ReactNativeScreen':
        return require('../../assets/Images/ReactNative_logo2.png');
      case 'ReactJSScreen':
        return require('../../assets/Images/ReactNative_logo2.png');
      case 'JavaScriptScreen':
        return require('../../assets/Images/JS_logo.png');
      case 'TypeScriptScreen':
        return require('../../assets/Images/typescript_logo.png');
      case 'JAVAScreen':
        return require('../../assets/Images/java_logo.png');
      case 'NodeJSScreen':
        return require('../../assets/Images/nodejs_logo.png');
      default:
        return require('../../assets/Images/jsintro.png');
    }
  };

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={styles.TitleContainer1}>
        <Text style={styles.textCC1}>{title}</Text>
        <Text style={{fontSize: 20}}>
          4444 <FontAwesomeIcon name="fire" size={20} color={'orange'} />
        </Text>
      </View>
      <View
        style={{
          height: SCREEN_HEIGHT / 4,
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
            <View
              style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 4,
                      resizeMode: 'contain',
                    }}
                    source={getImageSource(screen.name)}
                  />
                </View>
              </View>
              <View style={{flex: 4}}>
                <Text style={styles.optionText}> {screen.title}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <FontAwesomeIcon
                  name="arrow-right"
                  size={24}
                  color={'black'}
                  style={{opacity: 0.6}}
                />
              </View>
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
    backgroundColor: 'white',
  },
  TitleContainer1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childContainer2: {
    margin: 5,
    height: 'auto',
  },
  ChooseOptionsStyle: {
    fontSize: 20,
    color: 'black',
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
    height: SCREEN_HEIGHT / 10,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    shadowColor: 'black',
  },
  optionText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto-ExtraBoldItalic',
  },
});

export default QuizzyMainScreen;
