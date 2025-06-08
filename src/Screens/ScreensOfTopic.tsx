import React, {useEffect, useState} from 'react';
import TopicScreens from '../Components/TopicScreens';
import getQuizContent from '../api/getTopicScreens';

type QuizContent = {
  fundamentals: any[];
  intermediate: any[];
  advanced: any[];
};

type ScreensOfTopicRouteParams = {
  Topictitle: string;
};

type ScreensOfTopicProps = {
  route: {
    params: ScreensOfTopicRouteParams;
  };
};

const ScreensOfTopic: React.FC<ScreensOfTopicProps> = ({route}) => {
  const [quizContent, setQuizContent] = useState<QuizContent>({
    fundamentals: [],
    intermediate: [],
    advanced: [],
  });

  const {Topictitle} = route.params;

  const BASE_URL = 'http://192.168.0.5:3000';

  useEffect(() => {
    getQuizContent(BASE_URL, Topictitle, setQuizContent);
  }, [Topictitle, quizContent]);

  const quizLevels = ['Fundamentals', 'Intermediate', 'Advanced'];

  return (
    <TopicScreens
      TopicTitle={Topictitle}
      quizLevels={quizLevels}
      BASE_URL={BASE_URL}
      quizContent={quizContent}
    />
  );
};

export default ScreensOfTopic;
