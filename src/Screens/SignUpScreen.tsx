/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, Alert, TextInput} from 'react-native';
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
        backgroundColor: '#FBFAF2',
      }}>
      <View style={{marginLeft: 10, marginBottom: 20}}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
          Hello! Please register yourself to get started.
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            backgroundColor: 'lightgrey',
          }}
          value={userName}
          placeholder="Enter your username"
          onChangeText={u => setUsername(u)}
          placeholderTextColor={'grey'}
        />
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            backgroundColor: 'lightgrey',
          }}
          value={email}
          placeholder="Enter your email"
          onChangeText={e => setEmail(e)}
          placeholderTextColor={'grey'}
        />
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            backgroundColor: 'lightgrey',
          }}
          value={password}
          placeholder="Enter your password"
          onChangeText={p => setPassword(p)}
          placeholderTextColor={'grey'}
        />
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            backgroundColor: 'lightgrey',
            color: 'black',
          }}
          placeholder="Confirm password"
          placeholderTextColor={'grey'}
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
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
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

export default SignUpScreen;
