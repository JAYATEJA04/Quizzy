import {configureStore} from '@reduxjs/toolkit';
import progressBarSlice from '../features/progressBarSlice';

export const store = configureStore({
  reducer: {
    progress: progressBarSlice,
  },
});
