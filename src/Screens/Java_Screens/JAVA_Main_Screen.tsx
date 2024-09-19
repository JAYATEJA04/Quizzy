import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const JAVAMainScreen = () => {
  const Navigation = useNavigation();
  return (
    <View style={JAVAMainScreenStyles.container}>
      <View style={JAVAMainScreenStyles.TitleViewContainer}>
        <Text style={JAVAMainScreenStyles.TitleText}>JAVA</Text>
      </View>
      <ScrollView style={JAVAMainScreenStyles.ScrollViewStyle}>
        <View style={JAVAMainScreenStyles.IntroductionView}>
          <Text style={JAVAMainScreenStyles.IntroductionTextStyle}>
            In this Java quiz, you’ll begin with the essentials like basic
            types, loops, and methods—laying the foundation for understanding
            how Java works. As you progress, you’ll dive deeper into
            object-oriented programming, inheritance, and exception handling,
            learning how to write more structured and reusable code. Finally,
            you’ll tackle advanced topics like multithreading, collections, and
            Java’s powerful features like streams and lambdas, preparing you to
            handle complex problems with ease. Ready to sharpen your Java
            skills? Let’s dive in! 🎯
          </Text>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicTitleView}>
          <Text style={JAVAMainScreenStyles.SubtopicTitleTextStyle}>
            First Fundmentals
          </Text>
          <View style={JAVAMainScreenStyles.TheThinLineView}>
            <Text style={JAVAMainScreenStyles.TheThinLine} />
          </View>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicContentView}>
          <Text style={JAVAMainScreenStyles.SubTopicTextStyle}>
            This is where you’ll learn the core building blocks of TypeScript.
            It’s all about getting comfortable with the basics and how
            TypeScript improves JavaScript for better coding practices.
          </Text>
          <View style={JAVAMainScreenStyles.BulletPointView}>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Basic Syntax:
              </Text>{' '}
              Learn Java’s structure and syntax.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Variables & Data Types:
              </Text>{' '}
              Understand primitive types (int, double, char) and reference
              types.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Control Flow:
              </Text>
              Master if-else, loops (for, while), and switch statements.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Methods:
              </Text>{' '}
              Create reusable blocks of code with methods.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Object-Oriented Basics:{' '}
              </Text>
              Introduction to classes, objects, and encapsulation.
            </Text>
          </View>
          <View style={JAVAMainScreenStyles.StartTheQuizButtonView}>
            <TouchableOpacity
              style={JAVAMainScreenStyles.StartTheQuizButton}
              onPress={() =>
                Navigation.navigate('JAVA_Fundamental_quiz_question_0')
              }>
              <Text style={JAVAMainScreenStyles.StartTheQuizButtonText}>
                Let's get started{' '}
              </Text>
              <Icon name="arrow-right-long" color={'#E11F21'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicTitleView}>
          <Text style={JAVAMainScreenStyles.SubtopicTitleTextStyle}>
            Gearing up!
          </Text>
          <View style={JAVAMainScreenStyles.TheThinLineView}>
            <Text style={JAVAMainScreenStyles.TheThinLine} />
          </View>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicContentView}>
          <Text style={JAVAMainScreenStyles.SubTopicTextStyle}>
            This level introduces more advanced concepts, focusing on organizing
            code, handling errors, and building more efficient and scalable
            programs.
          </Text>
          <View style={JAVAMainScreenStyles.BulletPointView}>
            <Text style={JAVAMainScreenStyles.SubTopicTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Inheritance & Polymorphism:{' '}
              </Text>
              Dive into OOP principles like class hierarchy.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Abstract Classes & Interfaces:{' '}
              </Text>{' '}
              Design flexible and reusable code.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Exception Handling:{' '}
              </Text>
              Manage errors effectively using try-catch blocks.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Collections:{' '}
              </Text>
              Learn about lists, sets, and maps for managing data.
            </Text>
            <Text style={JAVAMainScreenStyles.BulletPointTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                File Handling:{' '}
              </Text>
              Work with input and output streams.
            </Text>
          </View>
          <View style={JAVAMainScreenStyles.StartTheQuizButtonView}>
            <TouchableOpacity
              style={JAVAMainScreenStyles.StartTheQuizButton}
              onPress={() =>
                Navigation.navigate('JAVA_Intermediate_quiz_question_0')
              }>
              <Text style={JAVAMainScreenStyles.StartTheQuizButtonText}>
                Let's gear up!{' '}
              </Text>
              <Icon name="arrow-right-long" color={'#E11F21'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicTitleView}>
          <Text style={JAVAMainScreenStyles.SubtopicTitleTextStyle}>
            Advance
          </Text>
          <View style={JAVAMainScreenStyles.TheThinLineView}>
            <Text style={JAVAMainScreenStyles.TheThinLine} />
          </View>
        </View>
        <View style={JAVAMainScreenStyles.SubTopicContentView}>
          <Text style={JAVAMainScreenStyles.ContentTextStyle}>
            At this stage, you’ll tackle complex problems, learn to optimize
            performance, and explore Java’s powerful features for
            professional-level applications.
          </Text>
          <View style={JAVAMainScreenStyles.BulletPointView}>
            <Text style={JAVAMainScreenStyles.ContentTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Multithreading:
              </Text>{' '}
              Execute multiple tasks in parallel for better performance.
            </Text>
            <Text style={JAVAMainScreenStyles.ContentTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Lambda Expressions:
              </Text>{' '}
              Write concise and functional code.
            </Text>
            <Text style={JAVAMainScreenStyles.ContentTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Streams API:{' '}
              </Text>
              Process collections efficiently.
            </Text>
            <Text style={JAVAMainScreenStyles.ContentTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                Generics:{' '}
              </Text>
              Create flexible and type-safe code.
            </Text>
            <Text style={JAVAMainScreenStyles.ContentTextStyle}>
              •{' '}
              <Text style={JAVAMainScreenStyles.BulletPointBoldStyle}>
                JVM Internals:{' '}
              </Text>
              Understand memory management and garbage collection.
            </Text>
          </View>
          <View style={JAVAMainScreenStyles.StartTheQuizButtonView}>
            <TouchableOpacity
              style={JAVAMainScreenStyles.StartTheQuizButton}
              onPress={() =>
                Navigation.navigate('JAVA_Intermediate_quiz_question_0')
              }>
              <Text style={JAVAMainScreenStyles.StartTheQuizButtonText}>
                Let's go!{' '}
              </Text>
              <Icon name="arrow-right-long" color={'#E11F21'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const JAVAMainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  TitleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  TitleText: {
    color: '#E11F21',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  ScrollViewStyle: {
    flex: 1,
  },
  IntroductionView: {
    marginTop: 10,
  },
  IntroductionTextStyle: {
    color: 'black',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  ContentTextStyle: {
    color: 'black',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  SubTopicTitleView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  SubtopicTitleTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: 'black',
  },
  TheThinLineView: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TheThinLine: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
  },
  SubTopicContentView: {
    marginTop: 10,
  },
  SubTopicTextStyle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  BulletPointView: {
    marginLeft: 10,
  },
  BulletPointTextStyle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  BulletPointBoldStyle: {
    fontWeight: 'bold',
  },
  StartTheQuizButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  StartTheQuizButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  StartTheQuizButtonText: {
    color: '#E11F21',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});
export default JAVAMainScreen;
