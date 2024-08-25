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
  Image,
  Linking,
  Button,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Quest from '../Components/Questions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNScreen from './RNScreens/RNScreen';
import {
  LinkingContext,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {QuizzyStyles} from '../Components/QuizzyStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import JS_Fundamentals_Questions from './JS_Fundamentals_questions';
const Stack = createNativeStackNavigator();

const JS_Main_Screen = () => {
  const Navigation = useNavigation();

  const handleFundmentalsQuizButton = () => {
    const firstQuestionScreen = `Question0`; // Replace with your logic
    Navigation.navigate(firstQuestionScreen);
  };

  return (
    <View
      style={{
        flex: 1,
        // padding: 10,
        // backgroundColor: '#FFEEAD',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 60,
          // backgroundColor: '#f8f8f8',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#FFD35A',
            // fontWeight: '500',
            fontFamily: 'Poppins-Bold',
          }}>
          JavaScript
        </Text>
      </View>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingTop: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 300, width: 300, borderRadius: 10}}
            source={require('../../../assets/Images/jsintro.png')}
          />
        </View>
        <Text
          style={{
            color: 'black',
            padding: 20,
            fontSize: 15,
            textAlign: 'justify',
            // flex: 1,
          }}>
          JavaScript is a versatile programming language primarily used to
          create interactive and dynamic content on websites. If you are
          aspiring for a developer role, learning JS would allow you to enhance
          user experience by adding animations, form validations and other
          features that makes web pages come alive. To work with HTML and CSS
          seamlessly, JS is essential and it will help you in front-end
          development. By learning JS you also can work with server-side
          framework like Node.js, this makes JS a powerful tool for working in
          client-side and server-side development. Let’s not make it
          overwhelming for now, let’s focus on getting started instead. All the
          best.
          {'\n'}
          {'\n'}
          Doing one thing at a time is extremely important so its better for a
          one who is learning to start with fundamentals, always a good move
        </Text>
        {/* <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => Alert.alert('Bol bey')}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>First fundamentals</Text>
            <Icon name={'angle-right'} size={30} color="black" solid />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Gear up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Advance topics</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{flex: 1, padding: 20}}>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            First Fundamentals
          </Text>
          <View
            style={{
              // bottom: 10,
              flex: 1,
              borderWidth: 1,
              // height: 200,
              height: 'auto',
              borderRadius: 8,
              padding: 10,
              backgroundColor: '#FBFFDC',
              borderColor: '#FFD93D',
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
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Just do the bit, start with the bit and continue doing the bit.
                Nothing else matters.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Attempting to master the fundamentals and sticking to it always
                pays off well, fundamentals are the foundation of confidence
                which reflects in our ability to problem solve.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
                // borderWidth: 1,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                  marginBottom: 5,
                }}>
                Here we will start off with concepts like:
                {'\n'}
                <View style={{flex: 1, paddingLeft: 20}}>
                  <Text
                    style={{fontSize: 15, fontWeight: '300', color: 'grey'}}>
                    {'\u2022'} variables
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} data types
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} functions
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} control structures
                  </Text>
                </View>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                If you have came prepared, well it so good of you and if not,
                give some in going through the documentation. Remember
                documentation is the truth and it makes your life easy too.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 5,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: 'grey',
                  fontSize: 16,
                  fontWeight: '300',
                  marginVertical: 5,
                }}>
                For fundamentals, going through this documentation would be a
                great help.
                {'\n'}
                {/* <View style={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => handleLinkPress('https://javascript.info/')}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: 'blue',
                        textDecorationLine: 'underline',
                      }}>
                      JavaScript info
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      handleLinkPress('https://developer.mozilla.org/en-US/')
                    }>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: 'blue',
                        textDecorationLine: 'underline',
                      }}>
                      MDN Docs
                    </Text>
                  </TouchableOpacity>
                </View> */}
                <View>
                  {/*
                    add onPress() here and for the next button too
                  */}
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'grey',
                        fontStyle: 'italic',
                        fontWeight: '100',
                      }}>
                      to be update
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'grey',
                        fontStyle: 'italic',
                        fontWeight: '100',
                      }}>
                      to be updated
                    </Text>
                  </TouchableOpacity>
                </View>
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                onPress={() => handleFundmentalsQuizButton()}>
                <Text
                  style={{
                    // flex: 1,
                    color: '#3C879C',
                    fontSize: 24,
                    textDecorationLine: 'underline',
                    fontFamily: 'Montserrat-Medium',
                    // justifyContent: 'center',
                  }}>
                  Let’s start the quiz!{' '}
                </Text>
                <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Gear up!
          </Text>
          <View
            style={{
              // top: ,
              flex: 1,
              borderWidth: 1,
              // height: 200,
              height: 'auto',
              borderRadius: 8,
              padding: 10,
              backgroundColor: '#FBFFDC',
              borderColor: '#FFD93D',
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
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                In this section we will deal with topics like Objects and its
                properties, Data types, Functions, Prototypes, Inheritance,
                Classes, Error handling and miscellaneous topics.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                You really need to Gear up as things here require more time and
                attention from you.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Having a good hold on fundamentals and intermediate topics like
                in this section, will be a rewarding one as it help you become a
                good developer to look up to.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Also remember JavaScript is never ending learning journey, you
                might remember things now and score good in the quiz and move
                on, but later when the same topics come around we might go
                blank, so keep iterating around these topics is very essential.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Enough of this discussion, go for it now.
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                onPress={() => Alert.alert('Gearin up things!')}>
                <Text
                  style={{
                    // flex: 1,
                    color: '#3C879C',
                    fontSize: 24,
                    textDecorationLine: 'underline',
                    fontFamily: 'Montserrat-Medium',
                    // justifyContent: 'center',
                  }}>
                  Lets gear up!{' '}
                </Text>
                <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Advance Topics
          </Text>
          <View
            style={{
              // top: ,
              flex: 1,
              borderWidth: 1,
              // height: 200,
              height: 'auto',
              borderRadius: 8,
              padding: 10,
              backgroundColor: '#FBFFDC',
              borderColor: '#FFD93D',
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
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Just do the bit, start with the bit and continue doing the bit.
                Nothing else matters.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                Attempting to master the fundamentals and sticking to it always
                pays off well, fundamentals are the foundation of confidence
                which reflects in our ability to problem solve.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
                // borderWidth: 1,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                  marginBottom: 5,
                }}>
                Here we will start off with concepts like:
                {'\n'}
                <View style={{flex: 1, paddingLeft: 20}}>
                  <Text
                    style={{fontSize: 15, fontWeight: '300', color: 'grey'}}>
                    {'\u2022'} variables
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} data types
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} functions
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: '300'}}>
                    {'\u2023'} control structures
                  </Text>
                </View>
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 10,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  color: 'grey',
                  fontWeight: '300',
                }}>
                If you have came prepared, well it so good of you and if not,
                give some in going through the documentation. Remember
                documentation is the truth and it makes your life easy too.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginVertical: 5,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginRight: 5,
                  // fontFamily: 'Montserrat-SemiBold',
                }}>
                {'\u2022'}
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: 'grey',
                  fontSize: 16,
                  fontWeight: '300',
                  marginVertical: 5,
                }}>
                For fundamentals, going through this documentation would be a
                great help.
                {'\n'}
                {/* <View style={{flex: 1}}>
                  <TouchableOpacity
                    onPress={() => handleLinkPress('https://javascript.info/')}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: 'blue',
                        textDecorationLine: 'underline',
                      }}>
                      JavaScript info
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      handleLinkPress('https://developer.mozilla.org/en-US/')
                    }>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: 'blue',
                        textDecorationLine: 'underline',
                      }}>
                      MDN Docs
                    </Text>
                  </TouchableOpacity>
                </View> */}
                <View>
                  {/*
                    add onPress() here and for the next button too
                  */}
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'grey',
                        fontStyle: 'italic',
                        fontWeight: '100',
                      }}>
                      to be update
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: 'grey',
                        fontStyle: 'italic',
                        fontWeight: '100',
                      }}>
                      to be updated
                    </Text>
                  </TouchableOpacity>
                </View>
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    // flex: 1,
                    color: '#3C879C',
                    fontSize: 24,
                    textDecorationLine: 'underline',
                    fontFamily: 'Montserrat-Medium',
                    // justifyContent: 'center',
                  }}>
                  Let’s go!{' '}
                </Text>
                <Icon name="arrow-right-long" color={'#3C879C'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JS_Main_Screen;
