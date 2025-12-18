// Notification controllers

exports.getNotifications = async (req, res) => {
  res.status(200).json({ success: true, message: 'Get notifications endpoint' });
};

exports.markAsRead = async (req, res) => {
  res.status(200).json({ success: true, message: 'Mark as read endpoint' });
};

exports.deleteNotification = async (req, res) => {
  res.status(200).json({ success: true, message: 'Delete notification endpoint' });
};

exports.createNotification = async (req, res) => {
  res.status(201).json({ success: true, message: 'Create notification endpoint' });
};
