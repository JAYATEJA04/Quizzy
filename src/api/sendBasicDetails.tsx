import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const sendBasicDetails = async () => {
  try {
    const uploadBasicInfo = await fetch(
      'http://192.168.0.3:3000/basicinfo/ReactNative/Fundamentals',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalQuestions: 15,
          currentTopic: 'React Native',
          currentLevel: 'Fundamentals',
        }),
      },
    );

    if (!uploadBasicInfo) {
      throw new Error('HTTP error: ${');
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendBasicDetails;
