import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux store/store/store';

const ProgressBar = () => {
  const screenCount: any = useSelector(
    (state: RootState) => state.progress.screenCount,
  );

  const progressBarWidth = `${(screenCount / 15) * 100}%`;

  return (
    <View style={styles.Container}>
      <View style={styles.ProgressBar}>
        <View style={[styles.ProgressFill, {width: progressBarWidth}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProgressBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    elevation: 2,
  },
  ProgressFill: {
    height: '100%',
    backgroundColor: 'green',
  },
});

export default ProgressBar;
