const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateProfile,
  enrollCourse,
  getEnrolledCourses
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(authorize('admin', 'instructor'), getUsers)
  .post(authorize('admin'), createUser);

router.route('/profile')
  .put(updateProfile);

router.route('/enroll/:courseId')
  .post(enrollCourse);

router.route('/enrolled-courses')
  .get(getEnrolledCourses);

router.route('/:id')
  .get(getUser)
  .put(authorize('admin'), updateUser)
  .delete(authorize('admin'), deleteUser);

module.exports = router;
