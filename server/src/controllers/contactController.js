const { sendContactEmail } = require('../utils/email');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, program, message } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ success: false, message: 'Email and mobile number are required.' });
  }

  try {
    await sendContactEmail({ name, email, phone, program, message });
    return res.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};
