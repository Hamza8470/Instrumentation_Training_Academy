const express = require('express');
const router = express.Router();
const {
  getCertificates,
  getCertificate,
  generateCertificate,
  verifyCertificate,
  downloadCertificate,
  getBadges,
  getUserBadges,
  awardBadge
} = require('../controllers/certificateController');
const { protect, authorize } = require('../middleware/auth');

router.route('/verify/:code')
  .get(verifyCertificate);

router.use(protect);

router.route('/')
  .get(getCertificates);

router.route('/generate')
  .post(authorize('admin', 'instructor'), generateCertificate);

router.route('/:id')
  .get(getCertificate);

router.route('/:id/download')
  .get(downloadCertificate);

// Badges routes
router.route('/badges')
  .get(getBadges);

router.route('/badges/user')
  .get(getUserBadges);

router.route('/badges/award')
  .post(authorize('admin'), awardBadge);

module.exports = router;
