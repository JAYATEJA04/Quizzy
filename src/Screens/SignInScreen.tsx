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
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Auth from './Auth';

const screenHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const {email, setEmail, password, setPassword, loading, signInWithEmail} =
    Auth();

  const Navigation = useNavigation();

  const handleLoginButton = async () => {
    // if (email.length < 10) {
    //   Alert.alert('Come on! type the correct email address!');
    // }
    await signInWithEmail();
    setEmail('');
    setPassword('');
    // Alert.alert('You are signed in!');
  };

  const handleSignUpScreen = () => {
    Navigation.navigate('SignUp Screen');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'orange',
              fontStyle: 'italic',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            Quizzy
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View style={{}}>
            <Text style={{color: 'black', marginLeft: 10}}>Name</Text>
            <TextInput
              style={styles.InputStyle}
              placeholder="Enter your username/email"
              onChangeText={v => setEmail(v)}
              value={email}
              placeholderTextColor={'grey'}
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text style={{color: 'black', marginLeft: 10}}>Password</Text>
            <TextInput
              style={styles.InputStyle}
              placeholder="Enter your password"
              placeholderTextColor={'grey'}
              onChangeText={p => setPassword(p)}
              value={password}
              autoCapitalize="none"
              secureTextEntry={true}
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
            {loading ? (
              <ActivityIndicator size="large" color="orange" />
            ) : (
              <TouchableOpacity
                style={{
                  // borderWidth: 1,
                  // height: 50,
                  // width: 100,
                  elevation: 3,
                  borderRadius: 8,
                  padding: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 10,
                  backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => handleLoginButton()}
                testID="Sign-in button">
                <Text
                  style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  Sign in
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>or sign-in with</Text>
      </View> */}
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={{color: 'black'}}>
            Don't have an account?
            <Text onPress={() => handleSignUpScreen()} style={{color: 'blue'}}>
              {' '}
              Sign up
            </Text>{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  InputStyle: {
    borderWidth: 1,
    // opacity: 0.2,
    borderColor: 'lightgrey',
    height: screenHeight / 14,
    color: 'black',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
});

export default LoginScreen;
