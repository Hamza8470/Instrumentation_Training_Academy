const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add workshop title'],
    trim: true
  },
  description: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  lab: {
    name: {
      type: String,
      required: true
    },
    room: String,
    capacity: Number
  },
  equipment: [{
    name: {
      type: String,
      required: true
    },
    quantity: Number,
    isAvailable: {
      type: Boolean,
      default: true
    }
  }],
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  maxParticipants: {
    type: Number,
    default: 20
  },
  bookings: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    seatNumber: Number,
    equipment: [String],
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'completed'],
      default: 'confirmed'
    },
    bookedAt: {
      type: Date,
      default: Date.now
    },
    checkIn: Date,
    checkOut: Date
  }],
  safetyChecklist: [{
    item: String,
    completed: {
      type: Boolean,
      default: false
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  materials: [String],
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  prerequisites: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const EquipmentLogSchema = new mongoose.Schema({
  equipment: {
    name: String,
    id: String,
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workshop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workshop'
  },
  action: {
    type: String,
    enum: ['checkout', 'checkin', 'maintenance', 'repair', 'calibration'],
    required: true
  },
  condition: {
    type: String,
    enum: ['good', 'fair', 'poor', 'damaged'],
    default: 'good'
  },
  notes: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Workshop = mongoose.model('Workshop', WorkshopSchema);
const EquipmentLog = mongoose.model('EquipmentLog', EquipmentLogSchema);

module.exports = { Workshop, EquipmentLog };
