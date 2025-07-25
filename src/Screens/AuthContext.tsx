import React, {useContext, createContext, useEffect, useState} from 'react';
import {supabase} from '../../lib/supabase';
import {Session} from '@supabase/supabase-js';

const AuthContext = createContext<{session: Session | null}>({session: null});

export const AuthProvider = ({children}) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => setSession(session));
    const {data: listener} = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session),
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{session}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
