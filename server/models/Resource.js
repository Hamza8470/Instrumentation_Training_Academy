const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: String,
  category: {
    type: String,
    enum: [
      'pdf',
      'case-study',
      'standard',
      'datasheet',
      'calibration-sheet',
      'ebook',
      'whitepaper',
      'research-paper'
    ],
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  fileName: String,
  fileSize: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  tags: [String],
  standard: {
    type: String,
    enum: ['ISA', 'IEC', 'ISO', 'ANSI', 'IEEE', 'Other']
  },
  standardNumber: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accessLevel: {
    type: String,
    enum: ['public', 'enrolled', 'premium', 'admin'],
    default: 'public'
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  version: {
    type: String,
    default: '1.0'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resource', ResourceSchema);
