const mongoose = require('mongoose');

const PlacementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add job title'],
    trim: true
  },
  company: {
    name: {
      type: String,
      required: true
    },
    logo: String,
    website: String,
    location: String
  },
  type: {
    type: String,
    enum: ['job', 'internship', 'project'],
    required: true
  },
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'remote'],
    default: 'full-time'
  },
  description: {
    type: String,
    required: true
  },
  requirements: [String],
  skills: [String],
  experience: {
    min: Number,
    max: Number
  },
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'INR'
    }
  },
  duration: String, // For internships
  applicationDeadline: Date,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  applications: [{
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    resume: String,
    coverLetter: String,
    status: {
      type: String,
      enum: ['applied', 'shortlisted', 'interviewed', 'selected', 'rejected'],
      default: 'applied'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    },
    notes: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const NotificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['info', 'success', 'warning', 'error', 'reminder'],
    default: 'info'
  },
  category: {
    type: String,
    enum: ['course', 'assessment', 'payment', 'announcement', 'message', 'placement', 'certificate', 'system'],
    default: 'system'
  },
  link: String,
  isRead: {
    type: Boolean,
    default: false
  },
  readAt: Date,
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const GamificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  totalPoints: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  streak: {
    current: {
      type: Number,
      default: 0
    },
    longest: {
      type: Number,
      default: 0
    },
    lastActivity: Date
  },
  achievements: [{
    name: String,
    description: String,
    icon: String,
    earnedAt: Date,
    points: Number
  }],
  activityLog: [{
    activity: String,
    points: Number,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  rank: Number,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Placement = mongoose.model('Placement', PlacementSchema);
const Notification = mongoose.model('Notification', NotificationSchema);
const Gamification = mongoose.model('Gamification', GamificationSchema);

module.exports = { Placement, Notification, Gamification };
