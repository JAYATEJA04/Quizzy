import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const TypeScriptMainScreen = () => (
  <View style={TypeScriptMainScreenStyles.container}>
    <View style={TypeScriptMainScreenStyles.TitleViewContainer}>
      <Text style={TypeScriptMainScreenStyles.TitleText}>TypeScript</Text>
    </View>
    <ScrollView style={TypeScriptMainScreenStyles.ScrollViewStyle}>
      <View style={TypeScriptMainScreenStyles.IntroductionView}>
        <Text style={TypeScriptMainScreenStyles.IntroductionTextStyle}>
          You'll start by exploring the basics like types and interfaces,
          learning how TypeScript helps you write safer, more predictable code.
          As you progress, you'll dive into more exciting topics like generics
          and enums, mastering how to write reusable and flexible code. Finally,
          you'll tackle advanced concepts like utility types and decorators,
          gaining the skills to handle complex projects with ease. Ready to take
          your coding to the next level?
        </Text>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicTitleView}>
        <Text style={TypeScriptMainScreenStyles.SubtopicTitleTextStyle}>
          First Fundmentals
        </Text>
        <View style={TypeScriptMainScreenStyles.TheThinLineView}>
          <Text style={TypeScriptMainScreenStyles.TheThinLine} />
        </View>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicContentView}>
        <Text style={TypeScriptMainScreenStyles.SubTopicTextStyle}>
          This category is all about building a solid foundation, learning the
          basics, and understanding how TypeScript improves JavaScript.
        </Text>
        <View style={TypeScriptMainScreenStyles.BulletPointView}>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Basic Types:
            </Text>{' '}
            Numbers, strings, booleans, and more.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Type Annotations:
            </Text>{' '}
            Explicitly define the type of your variables.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Interfaces & Types:
            </Text>
            Describe the structure of objects and functions.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Type Inference:
            </Text>{' '}
            Let TypeScript guess the type for you.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Union & Intersection Types:{' '}
            </Text>
            Combine types for flexible code.
          </Text>
        </View>
        <View style={TypeScriptMainScreenStyles.StartTheQuizButtonView}>
          <TouchableOpacity
            style={TypeScriptMainScreenStyles.StartTheQuizButton}>
            <Text style={TypeScriptMainScreenStyles.StartTheQuizButtonText}>
              Let's get started{' '}
            </Text>
            <Icon name="arrow-right-long" color={'#3178C6'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicTitleView}>
        <Text style={TypeScriptMainScreenStyles.SubtopicTitleTextStyle}>
          Gearing up!
        </Text>
        <View style={TypeScriptMainScreenStyles.TheThinLineView}>
          <Text style={TypeScriptMainScreenStyles.TheThinLine} />
        </View>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicContentView}>
        <Text style={TypeScriptMainScreenStyles.SubTopicTextStyle}>
          In this stage, you'll discover how to make your code more efficient,
          reusable, and scalable with TypeScript’s more advanced tools.
        </Text>
        <View style={TypeScriptMainScreenStyles.BulletPointView}>
          <Text style={TypeScriptMainScreenStyles.SubTopicTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Generics:{' '}
            </Text>
            Write flexible and reusable code.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointView}>
              Enums:
            </Text>{' '}
            Organize related values more clearly.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Type Assertions:{' '}
            </Text>
            Tell TypeScript exactly what a variable should be.
          </Text>
          <Text style={TypeScriptMainScreenStyles.BulletPointTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Modules:{' '}
            </Text>
            Structure your code with imports and exports.
          </Text>
        </View>
        <View style={TypeScriptMainScreenStyles.StartTheQuizButtonView}>
          <TouchableOpacity
            style={TypeScriptMainScreenStyles.StartTheQuizButton}>
            <Text style={TypeScriptMainScreenStyles.StartTheQuizButtonText}>
              Let's gear up!{' '}
            </Text>
            <Icon name="arrow-right-long" color={'#3178C6'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicTitleView}>
        <Text style={TypeScriptMainScreenStyles.SubtopicTitleTextStyle}>
          Advance
        </Text>
        <View style={TypeScriptMainScreenStyles.TheThinLineView}>
          <Text style={TypeScriptMainScreenStyles.TheThinLine} />
        </View>
      </View>
      <View style={TypeScriptMainScreenStyles.SubTopicContentView}>
        <Text style={TypeScriptMainScreenStyles.ContentTextStyle}>
          These advanced concepts will help you manage large-scale projects and
          tackle complex challenges in TypeScript.
        </Text>
        <View style={TypeScriptMainScreenStyles.BulletPointView}>
          <Text style={TypeScriptMainScreenStyles.ContentTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Utility Types:
            </Text>{' '}
            Manipulate and transform types easily.
          </Text>
          <Text style={TypeScriptMainScreenStyles.ContentTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Decorators:
            </Text>{' '}
            Add metadata and enhance classes or methods.
          </Text>
          <Text style={TypeScriptMainScreenStyles.ContentTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Mapped & Conditional Types:{' '}
            </Text>
            Build more dynamic and powerful types.
          </Text>
          <Text style={TypeScriptMainScreenStyles.ContentTextStyle}>
            •{' '}
            <Text style={TypeScriptMainScreenStyles.BulletPointBoldStyle}>
              Advanced Type Narrowing:{' '}
            </Text>
            Refine types with precision.
          </Text>
        </View>
        <View style={TypeScriptMainScreenStyles.StartTheQuizButtonView}>
          <TouchableOpacity
            style={TypeScriptMainScreenStyles.StartTheQuizButton}>
            <Text style={TypeScriptMainScreenStyles.StartTheQuizButtonText}>
              Let's go!{' '}
            </Text>
            <Icon name="arrow-right-long" color={'#3178C6'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>
);

const TypeScriptMainScreenStyles = StyleSheet.create({
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
    color: '#3178C6',
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
    color: '#3178C6',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
});
export default TypeScriptMainScreen;
