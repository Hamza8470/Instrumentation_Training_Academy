import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assessments: [],
  assessment: null,
  isLoading: false,
  isError: false,
  message: '',
};

const assessmentSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = assessmentSlice.actions;
export default assessmentSlice.reducer;
