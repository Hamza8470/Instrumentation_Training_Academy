import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';
import assessmentReducer from './slices/assessmentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    assessments: assessmentReducer,
  },
});
