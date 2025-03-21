import React from 'react';
import {View, Button, Text, Alert} from 'react-native';

const TestingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        testID="start-button"
        title="start"
        onPress={() => Alert.alert('You pressed it! YAYAYAYAY!')}
      />
      <View>
        <Text style={{color: 'black', fontSize: 24}}>Result</Text>
      </View>
      <View testID="result-card">
        <Text style={{color: 'black'}}>Total score:</Text>
        <Text style={{color: 'black'}}>Correct answers:</Text>
        <Text style={{color: 'black'}}>Wrong answers:</Text>
        <Text style={{color: 'black'}}>Total no. of questions:</Text>
      </View>
    </View>
  );
};

export default TestingScreen;
