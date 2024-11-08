/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ProgressBar from '../../Components/ProgressBar';

const {height, width} = Dimensions.get('window');

const RN_Fluid_Screen = () => {
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: ''}}>
      <StatusBar backgroundColor={'black'} />
      <View style={RN_Fluid_Screen_Styles.TitleViewContainer}>
        <Text style={RN_Fluid_Screen_Styles.screenTitleText}>React Native</Text>
      </View>
      <View style={RN_Fluid_Screen_Styles.X_ProgressBar_Aura_container}>
        <View style={{flex: 1}}>
          <Icon
            name="x"
            color={'black'}
            size={30}
            onPress={() => Alert.alert('hey!')}
          />
        </View>
        <View
          style={{
            flex: 10,
            width: 500,
            marginLeft: 10,
            // justifyContent: 'center',
            // alignItems: 'center',
            // borderWidth: 1,
          }}>
          <ProgressBar />
        </View>
        <View
          style={{
            flex: 1,
            width: 50,
            // borderWidth: 1,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Icon name="heart" size={30} color={'red'} solid />
        </View>
      </View>
      <Text style={{fontSize: 16, color: 'black'}}>Hi!</Text>
      <View>
        <Text>
          The screen height and width is :{' '}
          {`${height.toFixed(0)} & ${width.toFixed(0)}`}
        </Text>
      </View>
    </View>
  );
};

const RN_Fluid_Screen_Styles = StyleSheet.create({
  TitleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 24,
    color: 'lightblue',
    fontFamily: 'Montserrat-Bold',
  },
  X_ProgressBar_Aura_container: {
    height: height / 16,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RN_Fluid_Screen;
