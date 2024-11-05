import {createSlice} from '@reduxjs/toolkit';

interface ProgressState {
  screenCount: number;
}

const initialState: ProgressState = {
  screenCount: 1,
};

export const progressBar_Slice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    increment: state => {
      state.screenCount += 1;
    },
    decrement: state => {
      state.screenCount = 0;
    },
  },
});

export const {increment, decrement} = progressBar_Slice.actions;

export const currentProgress = (state: any) => state.progress.value;

export default progressBar_Slice.reducer;
