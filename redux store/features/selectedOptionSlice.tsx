import {AsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface SelectedOptionState {
  value: number;
}

const initialState: SelectedOptionState = {
  value: 0,
};

export const selectedOptionsSlice = createSlice({
  name: 'selectedOption',
  initialState,
  reducers: {
    setCorrectOptionPoint: state => {
      state.value += 1;
    },
    setWrongOptionPoint: state => {
      state.value += 0;
    },
  },
});

export const {setSelectedOption} = selectedOptionsSlice.actions;
