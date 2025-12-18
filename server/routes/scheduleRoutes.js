const express = require('express');
const router = express.Router();
const {
  getSchedules,
  getSchedule,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  markAttendance,
  getAttendance
} = require('../controllers/scheduleController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getSchedules)
  .post(authorize('admin', 'instructor'), createSchedule);

router.route('/:id')
  .get(getSchedule)
  .put(authorize('admin', 'instructor'), updateSchedule)
  .delete(authorize('admin'), deleteSchedule);

router.route('/:id/attendance')
  .post(authorize('admin', 'instructor'), markAttendance)
  .get(getAttendance);

module.exports = router;
