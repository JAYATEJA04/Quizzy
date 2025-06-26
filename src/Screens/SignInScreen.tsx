/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const Navigation = useNavigation();

  const handleLoginButton = () => {
    setUserName('');
    setPassword('');
    Alert.alert('You are signed in!');
  };

  const handleSignUpScreen = () => {
    Navigation.navigate('Sign up screen');
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 32, fontStyle: 'italic'}}>
          Quizzler
        </Text>
      </View>
      <View>
        <Text style={{color: 'black', marginLeft: 10}}>Name</Text>
        <TextInput
          style={{
            borderWidth: 1,
            color: 'black',
            borderRadius: 8,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'lightgrey',
          }}
          placeholder="Enter your username/password"
          onChangeText={v => setUserName(v)}
          value={userName}
          placeholderTextColor={'white'}
        />
      </View>
      <View>
        <Text style={{color: 'black', marginLeft: 10}}>Password</Text>
        <TextInput
          style={{
            borderWidth: 1,
            color: 'black',
            borderRadius: 8,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'lightgrey',
          }}
          placeholder="Enter your password"
          onChangeText={p => setPassword(p)}
          value={password}
        />
      </View>
      <View style={{alignItems: 'flex-end', marginBottom: 10}}>
        <Text
          onPress={() => Alert.alert('You clicked forget password')}
          style={{color: 'black'}}>
          Forget password?
        </Text>
      </View>
      <View style={{}}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            height: 50,
            // width: 100,
            elevation: 3,
            borderRadius: 8,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleLoginButton()}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>or sign-in with</Text>
      </View> */}
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>
          Don't have an account?
          <Text onPress={() => handleSignUpScreen()} style={{color: 'blue'}}>
            {' '}
            Sign up
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
