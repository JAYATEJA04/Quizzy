import {useState} from 'react';
import {Alert} from 'react-native';
import {supabase} from '../../lib/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const {session, setSession} = useAuth();

  async function signInWithEmail() {
    setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      console.log(error.message);
    }
    // console.log(data.session?.user.email);
    else {
      // setSession(data.session);
      Alert.alert('You signed in!');
    }
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
}
