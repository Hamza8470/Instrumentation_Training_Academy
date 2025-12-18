const express = require('express');
const router = express.Router();
const {
  getAnalytics,
  getCourseAnalytics,
  getUserAnalytics,
  getAttendanceAnalytics,
  getPerformanceAnalytics
} = require('../controllers/analyticsController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin', 'instructor'));

router.route('/')
  .get(getAnalytics);

router.route('/courses/:id')
  .get(getCourseAnalytics);

router.route('/users/:id')
  .get(getUserAnalytics);

router.route('/attendance')
  .get(getAttendanceAnalytics);

router.route('/performance')
  .get(getPerformanceAnalytics);

module.exports = router;
