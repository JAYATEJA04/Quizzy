import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../lib/supabase';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type ScreenItem = {
  name: string;
  title: string;
};

type QuizzyMainScreenProps = {
  title: string;
  screens: ScreenItem[];
};

const QuizzyMainScreen: React.FC<QuizzyMainScreenProps> = ({
  title,
  screens,
}) => {
  const navigation = useNavigation();
  //   console.log(screens.name);
  console.log(title);

  return (
    <ScrollView style={styles.parentContainer}>
      <View style={styles.TitleContainer1}>
        <Text style={styles.textCC1}>{title}</Text>
      </View>
      <View style={styles.childContainer2}>
        <Text style={styles.ChooseOptionsStyle}>
          Choose your tech stack here:
        </Text>
      </View>
      {screens.map((screen, index) => (
        <View key={index} style={styles.ScreeStyle}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate(screen.name)}>
            {/* onPress={() => navigation.navigate('Dashboard')}> */}
            <Text style={styles.optionText}>{screen.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Button title="Log out" onPress={() => supabase.auth.signOut()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'F3F8FF',
  },
  TitleContainer1: {
    borderWidth: 1,
    height: 'auto',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  childContainer2: {
    margin: 5,
    height: 'auto',
  },
  ChooseOptionsStyle: {
    fontFamily: 'AlbertSans-Black',
    color: 'black',
  },
  textCC1: {
    fontSize: 40,
    fontFamily: 'AlbertSans-BoldItalic',
    color: '#FDA403',
  },
  ScreeStyle: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  optionButton: {
    margin: 10,
    height: SCREEN_HEIGHT / 8,
    elevation: 3,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  optionText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'AlbertSans-Black',
  },
});

export default QuizzyMainScreen;
