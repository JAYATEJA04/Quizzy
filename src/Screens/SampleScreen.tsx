import React, {useState, useEffect, useContext, createContext} from 'react';
import 'react-native-url-polyfill/auto';
import {supabase} from '../../lib/supabase';
import Auth from '../Screens/Auth';
import {View, Text} from 'react-native';
import {Session} from '@supabase/supabase-js';
import {Button} from 'react-native';

export default function SampleLogin() {
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
    <View>
      <Auth />
      {/* {session && session.user && <Text>{session.user.id}</Text>}
      <Text>{anything}</Text> */}
      {/* {!session ? (
        <Auth />
      ) : (
        <>
          <Text style={{color: 'black'}}>Hello {session.user.email}</Text>
        </>
      )} */}
    </View>
  );
}
