import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';
import assessmentReducer from './slices/assessmentSlice';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    assessments: assessmentReducer,
  },
});
