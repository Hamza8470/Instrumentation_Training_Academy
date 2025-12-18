const express = require('express');
const router = express.Router();
const {
  getAssessments,
  getAssessment,
  createAssessment,
  updateAssessment,
  deleteAssessment,
  submitAssessment,
  getSubmissions,
  gradeSubmission
} = require('../controllers/assessmentController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getAssessments)
  .post(authorize('admin', 'instructor'), createAssessment);

router.route('/:id')
  .get(getAssessment)
  .put(authorize('admin', 'instructor'), updateAssessment)
  .delete(authorize('admin', 'instructor'), deleteAssessment);

router.route('/:id/submit')
  .post(submitAssessment);

router.route('/:id/submissions')
  .get(authorize('admin', 'instructor'), getSubmissions);

router.route('/submissions/:id/grade')
  .put(authorize('admin', 'instructor'), gradeSubmission);

module.exports = router;
