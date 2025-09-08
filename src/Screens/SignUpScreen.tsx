/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, Alert, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Auth from './Auth';

const SignUpScreen = () => {
  const [userName, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const {email, setEmail, password, setPassword, loading, signUpWithEmail} =
    Auth();

  const Navigation = useNavigation();

  const handleSignUpScreen = () => {
    // setEmail('');
    // // setEmail('');
    // setPassword('');
    signUpWithEmail();
    Alert.alert('You signed up! Wooo!');
  };

  const handleSignIn = () => {
    Navigation.navigate('SignIn Screen');
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={{color: 'black', fontSize: 18}}>
          Hello! Please register yourself to get started.
        </Text>
      </View>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <View>
          <TextInput
            style={SignUpScreenStyles.inputStyle}
            value={userName}
            placeholder="Enter your username"
            onChangeText={u => setUsername(u)}
            placeholderTextColor={'black'}
          />
        </View>
        <View>
          <TextInput
            style={SignUpScreenStyles.inputStyle}
            value={email}
            placeholder="Enter your email"
            onChangeText={e => setEmail(e)}
            placeholderTextColor={'black'}
          />
        </View>
        <View>
          <TextInput
            style={SignUpScreenStyles.inputStyle}
            value={password}
            placeholder="Enter your password"
            onChangeText={p => setPassword(p)}
            placeholderTextColor={'black'}
          />
        </View>
        <View>
          <TextInput
            style={SignUpScreenStyles.inputStyle}
            placeholder="Confirm password"
            placeholderTextColor={'black'}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              // borderWidth: 1,
              elevation: 5,
              borderRadius: 8,
              padding: 10,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: 'lightblue',
            }}
            onPress={() => handleSignUpScreen()}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Sign up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          // borderWidth: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>
          Already have an account?
          <Text onPress={() => handleSignIn()} style={{color: 'blue'}}>
            {' '}
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const SignUpScreenStyles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    opacity: 0.2,
    color: 'black',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
});

export default SignUpScreen;
