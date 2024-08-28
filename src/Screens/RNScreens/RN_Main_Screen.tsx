/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ReactNative_Main_Screen = () => {
  const Navigation = useNavigation();

  const handle_RN_FundmentalsQuizButton = () => {
    Navigation.navigate('Question0');
  };

  return (
    <View style={RN_Main_Screen_Styles.mainContainer}>
      <View style={RN_Main_Screen_Styles.screenTitleView}>
        <Text style={RN_Main_Screen_Styles.screenTitleText}>ReactNative</Text>
      </View>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingTop: 20}}>
        <Text style={RN_Main_Screen_Styles.Introduction_Text_Style}>
          Imagine creating mobile apps using the JavaScript skills you already
          have. That's the power of React Native. It's not just another
          framework; it's a bridge between web and mobile development.
          {'\n'}
          {'\n'}
          React Native lets you build mobile apps for both iOS and Android using
          a single codebase. If you're familiar with React for web development,
          you're already halfway there!
          {'\n'}
          {'\n'}
          <Text
            style={RN_Main_Screen_Styles.Highlight_In_Introduction_Text_Style}>
            Here's why React Native is exciting:
          </Text>
          {'\n'}
          {'\t'}
          {'\u2022'} You'll write JavaScript, but create truly native apps.
          {'\n'}
          {'\t'}
          {'\u2022'} Your skills become instantly more versatile.
          {'\n'}
          {'\t'}
          {'\u2022'} You can see your changes in real-time as you code.
          {'\n'}
          {'\t'}
          {'\u2022'} It opens doors to both mobile and web development careers.
          {'\n'}
          {'\n'}
          Don't worry if it sounds complex – we'll start with the basics. React
          Native breaks down into simple, reusable components, making it easier
          to understand and build upon.
          {'\n'}
          {'\n'}
          Doing one thing at a time is extremely important so its better to
          start with fundamentals.
        </Text>
        <View style={{flex: 1}}>
          <View style={{}}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 24,
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                First Fundamentals
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                height: 'auto',
                borderRadius: 8,
                padding: 10,
                backgroundColor: '#E7FCFF',
                borderColor: 'lightblue',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: '300',
                    marginRight: 10,
                  }}>
                  {'\u2022'}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    flex: 1,
                    color: 'black',
                    fontWeight: '300',
                    // borderWidth: 1,
                  }}>
                  These are the building blocks of React Native. Without
                  mastering the basics, as a developers you will struggle to
                  understand or implement more complex features. This category
                  ensures a solid foundation, covering the essential components,
                  layout, and basic user interaction.
                </Text>
              </View>
              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                      fontWeight: '300',
                      marginRight: 10,
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      flex: 1,
                      color: 'black',
                      fontWeight: '300',
                    }}>
                    Topics you will be quizzed:
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Core components and UI
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Basic components (View, Text, Image, TextInput, ScrollView,
                    Button)
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Handling text input
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Using a ScrollView
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Using List Views (FlatList, SectionList)Using a ScrollView
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Styling and Layout (Flexbox)
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Handling Touches (Buttons, Touchable components)
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Using State and Props
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '300',
                      paddingRight: 5,
                      fontSize: 20,
                      textAlign: 'center',
                    }}>
                    {'\u2022'}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '300',
                    }}>
                    Platform Specific Code
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => handle_RN_FundmentalsQuizButton()}>
                  <Text
                    style={{
                      color: '#3C879C',
                      fontSize: 24,
                      textDecorationLine: 'underline',
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    Let’s start the quiz!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Gearing up things! */}
          <View style={{flex: 1, padding: 10, borderWidth: 1}}>
            {/* Gear up title */}
            <View style={{}}>
              <Text
                style={{
                  fontSize: 24,
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Gear up!
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: '#E7FCFF',
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'lightblue',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '300'}}>
                  Ready to level up? In the Gear Up section, we'll dive deeper
                  into React Native's capabilities
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Topics you will be quizzed:
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Navigation (React Navigation basics)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                  alignItems: 'flex-start',
                }}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Networking (using Fetch API)
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Images (handling and caching)
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Animations (Animated API basics)
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Accessibility
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Timers
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Colors
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Device Information
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Transforms
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Handling App State changes
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Using Hermes Engine
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 20}}>
                <Text style={{color: 'black', fontSize: 20}}>{'\u2022'} </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    fontWeight: '300',
                  }}>
                  Performance Overview
                </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => Alert.alert("Let's gear up!")}>
                  <Text
                    style={{
                      color: '#3C879C',
                      fontSize: 24,
                      textDecorationLine: 'underline',
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    Let’s gear up!{' '}
                  </Text>
                  <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const RN_Main_Screen_Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  screenTitleView: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 30,
    color: 'lightblue',
    fontFamily: 'Poppins-Bold',
  },
  Introduction_Text_Style: {
    color: 'black',
    fontSize: 15,
    textAlign: 'justify',
  },
  Highlight_In_Introduction_Text_Style: {fontWeight: 'bold'},
});

export default ReactNative_Main_Screen;
