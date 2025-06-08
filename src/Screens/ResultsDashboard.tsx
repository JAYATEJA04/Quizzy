import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {fetchDashBoardResults} from '../api/quizResults';
import ResultsDashboardComponent from '../Components/ResultsDashboardComponent';

interface Config {
  basePath: string;
  level: string;
  endpoint: string;
}

const DashBoard = ({route}: any) => {
  const {QuizTitle, QuizLevel, baseUrl} = route.params;
  const Navigation = useNavigation();

  const [resultsOnDashboard, setResultsOnDashboard] = useState<Array<any>>([]);

  const getResults = async () => {
    const config: Config = {
      basePath: QuizTitle,
      level: QuizLevel,
      endpoint: 'dashboard-results',
    };

    const results = await fetchDashBoardResults(config);
    setResultsOnDashboard(results);
    console.log('the length of the array', resultsOnDashboard.length);

    console.log('Succesfully fetched the dashboard results to store it here.');
  };

  useEffect(() => {
    // fetchDashboardResults();
    getResults();
  }, []);

  const handleGoToHomeButton = () => {
    setResultsOnDashboard({
      totalNoOfQuestions: 0,
      overAllPoints: 0,
      wrongAnswers: 0,
    });
    clearOverAllPoints();
    console.log('Cleard the selected options data');
    Navigation.navigate('Home');
  };

  const clearOverAllPoints = async () => {
    try {
      const url = `${baseUrl}/${QuizTitle}/selected-options`;
      console.log(url);
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Selected options cleared successfully:', data);
    } catch (error) {
      console.error('Error clearing selected options:', error);
    }
  };

  // console.log(resultsOnDashboard.length);
  console.log('the contents of result in dashboard', resultsOnDashboard);

  return (
    <ResultsDashboardComponent
      resultsOnDashboard={resultsOnDashboard}
      handleGoToHomeButton={handleGoToHomeButton}
    />
  );
};

export default DashBoard;
