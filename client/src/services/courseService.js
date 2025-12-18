import api from './api';

// Get all courses
const getCourses = async (params) => {
  const response = await api.get('/courses', { params });
  return response.data;
};

// Get single course
const getCourse = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

// Create course
const createCourse = async (courseData) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

// Update course
const updateCourse = async (id, courseData) => {
  const response = await api.put(`/courses/${id}`, courseData);
  return response.data;
};

// Delete course
const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

const courseService = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};

export default courseService;
