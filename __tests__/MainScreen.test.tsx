import React from 'react';
import {describe, expect, it, test} from '@jest/globals';
import {jest} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../src/Screens/SignInScreen';
import {Alert} from 'react-native';

describe('LoginScreen', () => {
  it('shows alert when sign-in button is pressed', () => {
    jest.spyOn(Alert, 'alert');

    const {getByTestId} = render(<LoginScreen />);
    const signInButton = getByTestId('Sign-in button');
    fireEvent.press(signInButton);

    expect(Alert.alert).toHaveBeenCalledWith('You pressed sign-in!');
  });
});
