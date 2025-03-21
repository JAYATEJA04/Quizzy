import {beforeEach, expect, it, test} from '@jest/globals';
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';
import TestingScreen from './testingScreen';
import DashBoard from './ResultsDashboard2';
import {NavigationContainer} from '@react-navigation/native';
import renderWithNavigation from './testhelpfunction';

beforeEach(() => {
  renderWithNavigation(<DashBoard />);
});

// const renderWithNavigation = component => {
//   return render(<NavigationContainer>{component}</NavigationContainer>);
// };

test('result card is rendered properly', () => {
  expect(screen.getByTestId('result-card')).toBeTruthy();
});

test('the data is presented correctly', () => {
  expect(screen.getByText(/Total score:/)).toBeTruthy();
  expect(screen.getByText(/Correct answers:/)).toBeTruthy();
  expect(screen.getByText(/Wrong answers:/)).toBeTruthy();
  expect(screen.getByText(/Total no. of questions:/)).toBeTruthy();
});

test('go home button is rendered correctly', () => {
  expect(screen.getByTestId('go-home-button')).toBeTruthy();
});
