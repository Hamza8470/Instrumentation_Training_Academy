const express = require('express');
const router = express.Router();
const {
  getResources,
  getResource,
  createResource,
  updateResource,
  deleteResource,
  downloadResource
} = require('../controllers/resourceController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.route('/')
  .get(getResources)
  .post(protect, authorize('admin', 'instructor'), upload.single('file'), createResource);

router.route('/:id')
  .get(protect, getResource)
  .put(protect, authorize('admin', 'instructor'), updateResource)
  .delete(protect, authorize('admin'), deleteResource);

router.route('/:id/download')
  .get(protect, downloadResource);

module.exports = router;
