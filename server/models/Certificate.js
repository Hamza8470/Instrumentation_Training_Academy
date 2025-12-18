const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  certificateNumber: {
    type: String,
    unique: true,
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: Date,
  grade: {
    type: String,
    enum: ['A+', 'A', 'B+', 'B', 'C', 'Pass']
  },
  score: Number,
  verificationCode: {
    type: String,
    unique: true
  },
  qrCode: String, // URL to QR code image
  pdfUrl: String, // URL to certificate PDF
  skills: [String],
  isValid: {
    type: Boolean,
    default: true
  },
  revokedAt: Date,
  revokedReason: String,
  metadata: {
    templateVersion: String,
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    duration: String,
    completionDate: Date
  },
  linkedInShareUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate certificate number before saving
CertificateSchema.pre('save', async function(next) {
  if (!this.certificateNumber) {
    const date = new Date();
    const year = date.getFullYear();
    const count = await this.constructor.countDocuments();
    this.certificateNumber = `ITA-CERT-${year}-${String(count + 1).padStart(6, '0')}`;
  }
  
  if (!this.verificationCode) {
    const crypto = require('crypto');
    this.verificationCode = crypto.randomBytes(16).toString('hex').toUpperCase();
  }
  
  next();
});

const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  icon: String,
  category: {
    type: String,
    enum: ['achievement', 'skill', 'milestone', 'special'],
    default: 'achievement'
  },
  criteria: String,
  points: {
    type: Number,
    default: 0
  },
  rarity: {
    type: String,
    enum: ['common', 'rare', 'epic', 'legendary'],
    default: 'common'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const UserBadgeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  badge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Badge',
    required: true
  },
  earnedAt: {
    type: Date,
    default: Date.now
  },
  progress: {
    type: Number,
    default: 100
  }
});

const Certificate = mongoose.model('Certificate', CertificateSchema);
const Badge = mongoose.model('Badge', BadgeSchema);
const UserBadge = mongoose.model('UserBadge', UserBadgeSchema);

module.exports = { Certificate, Badge, UserBadge };
