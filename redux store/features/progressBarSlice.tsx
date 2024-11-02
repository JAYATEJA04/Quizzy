import {createSlice} from '@reduxjs/toolkit';

export const progressBarSlice = createSlice({
  name: 'progress',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: state => {
      state.value += 10;
    },
    decrement: state => {
      state.value -= 10;
    },
  },
});

export const {increment, decrement} = progressBarSlice.actions;

export const currentProgress = (state: any) => state.progress.value;

export default progressBarSlice.reducer;
