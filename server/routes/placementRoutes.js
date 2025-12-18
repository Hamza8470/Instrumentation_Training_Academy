const express = require('express');
const router = express.Router();
const {
  getPlacements,
  getPlacement,
  createPlacement,
  updatePlacement,
  deletePlacement,
  applyForPlacement,
  updateApplicationStatus
} = require('../controllers/placementController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.use(protect);

router.route('/')
  .get(getPlacements)
  .post(authorize('admin', 'instructor'), createPlacement);

router.route('/:id')
  .get(getPlacement)
  .put(authorize('admin', 'instructor'), updatePlacement)
  .delete(authorize('admin'), deletePlacement);

router.route('/:id/apply')
  .post(upload.single('resume'), applyForPlacement);

router.route('/:id/applications/:applicationId')
  .put(authorize('admin', 'instructor'), updateApplicationStatus);

module.exports = router;
