import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  View,
  Alert,
  Platform,
} from 'react-native';

const ProgressBar = ({progress}) => {
  const [screenCount, setScreenCount] = useState(0);

  const handlePress = ({screenCount}) => {
    if (screenCount >= 15) {
      Alert.alert('Done bey!');
    }

    if (screenCount < 15) {
      setScreenCount(screenCount + 1);
    }
  };

  const progressBarWidth = screenCount * 10;

  return (
    <View style={styles.Container}>
      <View style={styles.ProgressBar}>
        <View style={[styles.ProgressFill, {width: `${progressBarWidth}%`}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // padding: 5,
    // justifyContent: 'center',
    // borderWidth: 1,
  },
  ProgressBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  ProgressFill: {
    height: '100%',
    backgroundColor: 'green',
  },
});

export default ProgressBar;
