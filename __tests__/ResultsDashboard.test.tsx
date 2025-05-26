import {beforeEach, expect, test, jest, it, describe} from '@jest/globals';
import 'react-native';
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import DashBoard from '../src/Screens/ResultsDashboard.tsx';
import renderWithNavigation from '../src/Screens/testhelpfunction.tsx';
import * as api from '../src/api/quizResults.ts';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: jest.fn()}),
}));

const mockResults = [
  {totalNoOfQuestions: 10, overallPoints: 8, wrongAnswers: 2},
];

jest.spyOn(api, 'fetchDashBoardResults').mockResolvedValue(mockResults);

describe('Dashboard state change', () => {
  it('updates resultsOnDashboard state after fetching from the backend', async () => {
    const {findByTestId} = render(<DashBoard />);
    const totalNoOfQuestions = await findByTestId('totalNoOfQuestions');
    const overAllPoints = await findByTestId('overAllPoints');
    const wrongAnswers = await findByTestId('wrongAnswers');

    expect(totalNoOfQuestions.props.children).toBe(10);
    expect(overAllPoints.props.children).toBe(8);
    expect(wrongAnswers.props.children).toBe(2);

    // await waitFor(() => {
    //   expect(ResultsDashboardComponent.props.resultsOnDashboard).toEqual(
    //     mockResults,
    //   );
    // });
  });
});
