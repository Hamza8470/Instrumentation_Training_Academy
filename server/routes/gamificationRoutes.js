const express = require('express');
const router = express.Router();
const {
  getLeaderboard,
  getUserGamification,
  updatePoints,
  updateStreak,
  getAchievements
} = require('../controllers/gamificationController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/leaderboard')
  .get(getLeaderboard);

router.route('/user')
  .get(getUserGamification);

router.route('/achievements')
  .get(getAchievements);

router.route('/points')
  .post(updatePoints);

router.route('/streak')
  .post(updateStreak);

module.exports = router;
