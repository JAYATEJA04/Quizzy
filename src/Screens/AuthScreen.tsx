import React, {useState, useEffect} from 'react';
import 'react-native-url-polyfill/auto';
import {supabase} from '../../lib/supabase';
import {Session} from '@supabase/supabase-js';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './SignInScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function VerifyLogin() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const anything = session?.user.id;
  // console.log(session);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn Screen" component={LoginScreen} />
      <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
