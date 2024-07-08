import React, {createContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CountContext = createContext(0);

export const CountAnswers = ({children}) => {
  const [countCorrectOptions, setCountCorrectOptions] = useState<number>(0);
  const [countWrongOptions, setCountWrongOptions] = useState<number>(0);

  return (
    <CountContext.Provider
      value={{
        countCorrectOptions,
        setCountCorrectOptions,
        countWrongOptions,
        setCountWrongOptions,
      }}>
      {children}
    </CountContext.Provider>
  );
};
