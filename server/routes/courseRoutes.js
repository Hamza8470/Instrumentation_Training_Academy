const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  addReview,
  uploadMaterial
} = require('../controllers/courseController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/')
  .get(getCourses)
  .post(protect, authorize('admin', 'instructor'), createCourse);

router.route('/:id')
  .get(getCourse)
  .put(protect, authorize('admin', 'instructor'), updateCourse)
  .delete(protect, authorize('admin'), deleteCourse);

router.route('/:id/reviews')
  .post(protect, addReview);

router.route('/:id/materials')
  .post(protect, authorize('admin', 'instructor'), upload.single('file'), uploadMaterial);

module.exports = router;
