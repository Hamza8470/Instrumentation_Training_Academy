import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import courseService from '../../services/courseService';

const initialState = {
  courses: [],
  course: null,
  isLoading: false,
  isError: false,
  message: '',
};

// Get all courses
export const getCourses = createAsyncThunk(
  'courses/getAll',
  async (params, thunkAPI) => {
    try {
      return await courseService.getCourses(params);
    } catch (error) {
      const message = error.response?.data?.error || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get single course
export const getCourse = createAsyncThunk(
  'courses/getOne',
  async (id, thunkAPI) => {
    try {
      return await courseService.getCourse(id);
    } catch (error) {
      const message = error.response?.data?.error || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload.data;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload.data;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
