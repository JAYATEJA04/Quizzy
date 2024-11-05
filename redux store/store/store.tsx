import {configureStore} from '@reduxjs/toolkit';
import progressBar_Slice from '../features/progressBarSlice';

export const store = configureStore({
  reducer: {
    progress: progressBar_Slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
