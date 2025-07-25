import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {supabase} from '../../lib/supabase';
import {useAuth} from './AuthContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {session, setSession} = useAuth();

  async function signInWithEmail() {
    setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    // setSession(data.session);
    console.log(data.session?.user.email);

    Alert.alert('You signed in!');
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    if (!session) {
      Alert.alert('Please check your inbox for email verification!');
    }
    setLoading(false);
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    signInWithEmail,
    signUpWithEmail,
  };
  // return (
  //   <View style={styles.container}>
  //     <View style={[styles.verticallySpaced, styles.mt20]}>
  //       <TextInput
  //         onChangeText={text => setEmail(text)}
  //         value={email}
  //         placeholder="email@address.com"
  //         autoCapitalize={'none'}
  //       />
  //     </View>
  //     <View style={styles.verticallySpaced}>
  //       <TextInput
  //         onChangeText={text => setPassword(text)}
  //         value={password}
  //         secureTextEntry={true}
  //         placeholder="Password"
  //         autoCapitalize={'none'}
  //       />
  //     </View>
  //     <View style={[styles.verticallySpaced, styles.mt20]}>
  //       <Button
  //         title="Sign in"
  //         disabled={loading}
  //         onPress={() => signInWithEmail()}
  //       />
  //     </View>
  //     <View style={styles.verticallySpaced}>
  //       <Button
  //         title="Sign up"
  //         disabled={loading}
  //         onPress={() => signUpWithEmail()}
  //       />
  //     </View>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
//     padding: 12,
//   },
//   verticallySpaced: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     alignSelf: 'stretch',
//   },
//   mt20: {
//     marginTop: 20,
//   },
// });
