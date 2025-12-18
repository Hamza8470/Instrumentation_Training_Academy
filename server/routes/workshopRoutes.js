const express = require('express');
const router = express.Router();
const {
  getWorkshops,
  getWorkshop,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop,
  bookWorkshop,
  cancelBooking,
  checkIn,
  checkOut,
  logEquipmentUsage
} = require('../controllers/workshopController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getWorkshops)
  .post(authorize('admin', 'instructor'), createWorkshop);

router.route('/:id')
  .get(getWorkshop)
  .put(authorize('admin', 'instructor'), updateWorkshop)
  .delete(authorize('admin'), deleteWorkshop);

router.route('/:id/book')
  .post(bookWorkshop);

router.route('/:id/cancel')
  .post(cancelBooking);

router.route('/:id/checkin')
  .post(checkIn);

router.route('/:id/checkout')
  .post(checkOut);

router.route('/equipment/log')
  .post(authorize('admin', 'instructor'), logEquipmentUsage);

module.exports = router;
