/* eslint-disable react-native/no-inline-styles */
// // RN main screen
// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {Icon} from 'react-native-vector-icons/Icon';

// const TopicMainScreen = ({route}) => {
//   const {screenTitle, baseUrl} = route.params;
//   const [mainScreenData, setMainScreenData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // console.log(screenTitle + 'hi');

//   useEffect(() => {
//     const getMainScreenContent = async () => {
//       try {
//         const response = await fetch(
//           `${baseUrl}/${screenTitle}/main-screen-content`,
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//         }
//         // console.log('hi' + screenTitle);

//         const fetchedScreenData = await response.json();
//         setMainScreenData(fetchedScreenData);
//         console.log(`${screenTitle} main screen data loaded successfully!`);
//       } catch (error) {
//         console.error(`Error fetching main screen data: ${error}`);
//       }
//     };

//     getMainScreenContent();
//   }, [baseUrl, screenTitle]);

//   if (!mainScreenData.length || !mainScreenData[0]) {
//     return (
//       <View>
//         <Text>Error loading data. Please try again later.</Text>
//       </View>
//     );
//   }

//   console.log(mainScreenData[0].introduction, '& hi', screenTitle);

//   // if (loading) {
//   //   return (
//   //     <View>
//   //       <Text style={{color: 'black'}}>Loading...</Text>
//   //     </View>
//   //   );
//   // }

//   const renderTopics = topics => {
//     return topics.map((topic, index) => (
//       <View key={index}>
//         <Text>{topic.title}</Text>
//         <Text>{topic.description}</Text>
//       </View>
//     ));
//   };

//   return (
//     <View style={TopicMainScreenStyles.Container}>
//       <View style={TopicMainScreenStyles.TitleViewContainer}>
//         <Text style={TopicMainScreenStyles.screenTitleText}>{screenTitle}</Text>
//       </View>
//       <ScrollView style={TopicMainScreenStyles.ScrollViewStyle}>
//         <View style={TopicMainScreenStyles.IntroductionView}>
//           <Text style={TopicMainScreenStyles.IntroductionTextStyle}>
//             {mainScreenData[0].levels[0].level}
//           </Text>
//         </View>
//         {/* <View>
//           {Levels.map((level, index) => (
//             <View key={index} style={TopicMainScreenStyles.LevelViewContainer}>
//               <View style={TopicMainScreenStyles.SubTopicTitleView}>
//                 <Text style={TopicMainScreenStyles.SubTopicTitleText}>
//                   {level.level}
//                 </Text>
//                 <View style={TopicMainScreenStyles.ThinLineView}>
//                   <Text style={TopicMainScreenStyles.ThinLine} />
//                 </View>
//               </View>
//               <View style={TopicMainScreenStyles.IntroductionView}>
//                 <Text style={TopicMainScreenStyles.IntroductionTextStyle}>
//                   {level.intro}
//                 </Text>
//               </View>
//               {level.topics.map((topic, topicIndex) => (
//                 <View
//                   key={topicIndex}
//                   style={TopicMainScreenStyles.BulletPointView}>
//                   <Text style={TopicMainScreenStyles.BulletPointText}>
//                     •{' '}
//                     <Text
//                       style={TopicMainScreenStyles.BulletPointHighlightedText}>
//                       {topic.title}:
//                     </Text>{' '}
//                     {topic.description}
//                   </Text>
//                 </View>
//               ))}
//               <View style={TopicMainScreenStyles.StartTheQuizButtonView}>
//                 <TouchableOpacity
//                   style={TopicMainScreenStyles.StartTheQuizButton}
//                   onPress={() => Navigation.navigate(`${level.ScreenName}`)}>
//                   <Text style={TopicMainScreenStyles.StartTheQuizButtonText}>
//                     {level.QuizButtonText}{' '}
//                   </Text>
//                   <Icon name="arrow-right-long" color={'#3178C6'} size={30} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ))}
//         </View> */}
//       </ScrollView>
//     </View>
//   );
// };

// const TopicMainScreenStyles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   TitleViewContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//   },
//   screenTitleText: {
//     fontSize: 24,
//     color: 'lightblue',
//     fontFamily: 'Montserrat-Bold',
//   },
//   ScrollViewStyle: {
//     flex: 1,
//   },
//   scroll_view_contentcontainer: {
//     paddingTop: 20,
//     padding: 5,
//   },
//   IntroductionTextStyle: {
//     color: 'black',
//     fontSize: 14,
//     fontFamily: 'OpenSans-Regular',
//   },
//   LevelViewContainer: {
//     flexDirection: 'column',
//   },
//   SubTopicTitleView: {
//     marginTop: 10,
//     flexDirection: 'row',
//   },
//   SubTopicTitleText: {
//     fontSize: 20,
//     color: 'black',
//     fontFamily: 'Montserrat-SemiBold',
//   },
//   IntroductionView: {
//     marginTop: 10,
//   },
//   ThinLineView: {
//     marginLeft: 10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ThinLine: {
//     height: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     width: '100%',
//   },
//   BulletPointView: {
//     marginLeft: 10,
//   },
//   BulletPointText: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'OpenSans-Regular',
//   },
//   BulletPointHighlightedText: {
//     fontWeight: 'bold',
//   },
//   StartTheQuizButtonView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   StartTheQuizButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   StartTheQuizButtonText: {
//     color: '#3178C6',
//     fontSize: 20,
//     fontFamily: 'OpenSans-Bold',
//     textDecorationLine: 'underline',
//   },
// });

// export default TopicMainScreen;

// -------- X ---------

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>Loading...</Text>
      </View>
    );
  }

  if (!mainScreenData) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading data. Please try again later.</Text>
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
        <Text style={styles.screenTitleText}>{screenTitle}</Text>
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.introductionView}>
            <Text style={styles.introductionTextStyle}>
              {mainScreenData.introduction}
            </Text>
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
    backgroundColor: 'white',
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
    color: 'lightblue',
    fontFamily: 'Montserrat-Bold',
  },
  introductionView: {
    marginTop: 10,
  },
  introductionTextStyle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  levelContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  subTopicTitleView: {
    flexDirection: 'row',
  },
  subTopicTitleText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
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
    marginBottom: 10,
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
});

export default TopicMainScreen;
