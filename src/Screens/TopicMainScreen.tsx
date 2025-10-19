/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const TopicMainScreen = ({route, navigation}) => {
  const {screenTitle, baseUrl} = route.params;
  const [mainScreenData, setMainScreenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigation = useNavigation();

  const getMainScreenContent = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/${screenTitle}/main-screen-content`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const fetchedScreenData = await response.json();
      // console.log('Fetched Data:', fetchedScreenData);
      setMainScreenData(fetchedScreenData[0]);
      console.log(`${screenTitle} main screen data loaded successfully!`);
    } catch (error) {
      console.error(`Error fetching main screen data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMainScreenContent();
  }, [baseUrl, screenTitle]);

  if (loading) {
    return (
      <View style={styles.LoadingView}>
        <Text style={styles.LoadingText}>Loading...</Text>
      </View>
    );
  }

  if (!mainScreenData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={{color: 'black'}}>
          Error loading data. Please try again later.
        </Text>
      </View>
    );
  }

  const renderTopic = ({item}) => (
    <View style={styles.topicContainer}>
      <Text style={styles.BulletPointText}>
        • <Text style={styles.BulletPointHighlightedText}>{item.title}:</Text>{' '}
        {item.description}
      </Text>
    </View>
  );

  const getTopicName = argument => {
    if (argument === 'ReactNative') {
      return <Text style={{color: '#58C4DC'}}>React Native</Text>;
    }
  };

  const renderLevel = ({item}) => (
    <View style={styles.levelContainer}>
      <View style={styles.subTopicTitleView}>
        <Text style={styles.subTopicTitleText}>{item.level}</Text>
        <View style={styles.thinLineView}>
          <Text style={styles.thinLine} />
        </View>
      </View>
      <View style={styles.introductionView}>
        <Text style={styles.introductionTextStyle}>{item.intro}</Text>
      </View>
      <FlatList
        data={item.topics}
        renderItem={renderTopic}
        keyExtractor={topic => topic.title}
        scrollEnabled={false}
      />
      <View style={styles.startTheQuizButtonView}>
        <TouchableOpacity
          style={styles.startTheQuizButton}
          onPress={() => Navigation.navigate(item.ScreenName)}>
          <Text style={styles.startTheQuizButtonText}>
            {item.QuizButtonText}
          </Text>
          <Icon name="arrow-right" color={'#3178C6'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleViewContainer}>
        <Text style={styles.screenTitleText}>{getTopicName(screenTitle)}</Text>
      </View>
      <FlatList
        contentContainerStyle={{
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ListHeaderComponent={
          <View style={styles.introductionView}>
            {/* <Text style={styles.introductionTextStyle}>
              {mainScreenData.introduction}
            </Text> */}
          </View>
        }
        data={mainScreenData.levels}
        renderItem={renderLevel}
        keyExtractor={level => level.level}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  screenTitleText: {
    fontSize: 24,
    color: 'blue',
    fontFamily: 'Roboto-Bold',
  },
  introductionView: {
    marginTop: 5,
  },
  introductionTextStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  levelContainer: {
    borderRadius: 10,
    elevation: 5,
    padding: 5,
    flexDirection: 'column',
    marginTop: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  subTopicTitleView: {
    flexDirection: 'row',
  },
  subTopicTitleText: {
    fontSize: 20,
    color: 'orange',
    fontFamily: 'Roboto-Italic',
    fontWeight: 'bold',
  },
  thinLineView: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thinLine: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
  },
  topicContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topicDescription: {
    fontSize: 16,
  },
  startTheQuizButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  startTheQuizButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  startTheQuizButtonText: {
    color: '#3178C6',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    textDecorationLine: 'underline',
  },
  BulletPointText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
  },
  BulletPointHighlightedText: {
    fontWeight: 'bold',
  },
  LoadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoadingText: {
    color: 'black',
  },
});

export default TopicMainScreen;
