const express = require('express');
const router = express.Router();
const {
  getForumPosts,
  getForumPost,
  createForumPost,
  updateForumPost,
  deleteForumPost,
  addReply,
  likePost,
  getMessages,
  sendMessage,
  getAnnouncements,
  createAnnouncement
} = require('../controllers/forumController');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);

// Forum routes
router.route('/')
  .get(getForumPosts)
  .post(createForumPost);

router.route('/:id')
  .get(getForumPost)
  .put(updateForumPost)
  .delete(deleteForumPost);

router.route('/:id/replies')
  .post(addReply);

router.route('/:id/like')
  .post(likePost);

// Messages routes
router.route('/messages')
  .get(getMessages)
  .post(sendMessage);

// Announcements routes
router.route('/announcements')
  .get(getAnnouncements)
  .post(authorize('admin', 'instructor'), createAnnouncement);

module.exports = router;
