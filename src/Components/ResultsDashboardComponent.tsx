/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

const ResultsDashboardComponent = ({
  resultsOnDashboard,
  handleGoToHomeButton,
}) => {
  console.log('the answer:', resultsOnDashboard.totalNoOfQuestions);
  return (
    <View style={DashBoardScreenStyles.container}>
      <Text style={DashBoardScreenStyles.ScreenTitleText}>Results</Text>
      {/* <Text style={{color: 'black'}}> Your final results are:</Text> */}
      <View style={{flex: 2, marginTop: 10}}>
        <View
          style={{
            // flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            // borderWidth: 1,
          }}>
          <Text style={{fontFamily: 'Albert-Sans'}}>
            Your quiz results are here:
          </Text>
        </View>
        <View
          style={{
            // flex: 2,
            alignSelf: 'center',
            height: SCREEN_HEIGHT / 3,
            width: SCREEN_WIDTH - 50,
            elevation: 10,
            // borderWidth: 1,
            backgroundColor: '#EEFDFF',
            borderRadius: 8,
            marginTop: SCREEN_HEIGHT / 88,
          }}
          testID="result-card">
          {/* <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
              Result
            </Text>
          </View> */}
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={{color: 'black'}}>
              Total score:{' '}
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}
                testID="totalNoOfQuestions">
                {resultsOnDashboard.totalNoOfQuestions}
              </Text>{' '}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={{color: 'black'}}>
              Correct answers:
              <Text
                style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}
                testID="overAllPoints">
                {resultsOnDashboard.overallPoints}
              </Text>
            </Text>
          </View>
          <View
            style={[
              DashBoardScreenStyles.BorderWidth,
              {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 10,
              },
            ]}>
            <Text style={{color: 'black'}}>
              Wrong answers:{' '}
              <Text
                style={{fontSize: 24, fontWeight: 'bold'}}
                testID="wrongAnswers">
                {resultsOnDashboard.wrongAnswers}
              </Text>{' '}
            </Text>
          </View>
          <View
            style={[
              DashBoardScreenStyles.BorderWidth,
              {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 10,
              },
            ]}>
            <Text style={{color: 'black'}}>
              Total no. of questions:
              <Text style={{fontSize: 24, fontWeight: 'bold'}}> 14 </Text>
            </Text>
          </View>
          <View
            style={[
              DashBoardScreenStyles.BorderWidth,
              {
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 10,
              },
            ]}>
            <Text
              style={{
                color: 'green',
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              You did well, keep it up!
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          // borderWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            elevation: 3,
            height: SCREEN_HEIGHT / 13,
            width: SCREEN_WIDTH - 50,
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#FFB200',
            marginTop: 10,
          }}
          testID="go-home-button"
          onPress={() => handleGoToHomeButton()}>
          <Text
            style={{
              color: 'black',
              fontSize: 24,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Go to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DashBoardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  ScreenTitleText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  BorderWidth: {
    // borderWidth: 1,
  },
});

export default ResultsDashboardComponent;
