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
    increment: state => {
      state.value += 1;
    },
  },
});
