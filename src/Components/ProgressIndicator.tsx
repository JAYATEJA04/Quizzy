import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const IndicateProgress = () => {
  const Navigation = useNavigation();

  const [progress, setProgress] = useState(0);

  const handleProgressBar = () => {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 10);
      Navigation.navigate('Screen 2');
    }
  };

  return progress;
};

export default IndicateProgress;
