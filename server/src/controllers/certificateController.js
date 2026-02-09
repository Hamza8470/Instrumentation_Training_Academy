const Certificate = require('../models/Certificate');

exports.verifyCertificate = async (req, res) => {
  const { certificateNumber } = req.body;

  if (!certificateNumber || typeof certificateNumber !== 'string') {
    return res.status(400).json({ success: false, message: 'Certificate number is required.' });
  }

  const normalized = certificateNumber.trim().toUpperCase();

  try {
    const certificate = await Certificate.findOne({ certificateNumber: normalized }).lean();

    if (!certificate) {
      return res.status(404).json({ success: false, verified: false, message: 'Certificate not verified.' });
    }

    return res.json({
      success: true,
      verified: true,
      certificate: {
        certificateNumber: certificate.certificateNumber,
        studentName: certificate.studentName,
        courseName: certificate.courseName,
        issueDate: certificate.issueDate,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error verifying certificate.' });
  }
};
