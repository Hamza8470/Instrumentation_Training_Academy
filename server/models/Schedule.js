const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  batch: {
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      unique: true,
      required: true
    }
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  schedule: [{
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    startTime: String,
    endTime: String,
    topic: String,
    room: String
  }],
  sessions: [{
    date: {
      type: Date,
      required: true
    },
    startTime: String,
    endTime: String,
    topic: String,
    description: String,
    type: {
      type: String,
      enum: ['lecture', 'practical', 'lab', 'workshop', 'webinar', 'guest-lecture'],
      default: 'lecture'
    },
    meetingLink: String,
    room: String,
    status: {
      type: String,
      enum: ['scheduled', 'ongoing', 'completed', 'cancelled', 'rescheduled'],
      default: 'scheduled'
    },
    attendance: [{
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      present: {
        type: Boolean,
        default: false
      },
      markedAt: Date
    }],
    materials: [String],
    recording: String
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  maxStudents: {
    type: Number,
    default: 30
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
