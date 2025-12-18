const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add assessment title'],
    trim: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  type: {
    type: String,
    enum: ['quiz', 'test', 'assignment', 'project', 'practical'],
    required: true
  },
  description: String,
  instructions: String,
  duration: {
    type: Number, // in minutes
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  passingMarks: {
    type: Number,
    required: true
  },
  questions: [{
    questionText: {
      type: String,
      required: true
    },
    questionType: {
      type: String,
      enum: ['mcq', 'multiple-choice', 'true-false', 'fill-blank', 'descriptive', 'practical'],
      required: true
    },
    options: [String], // For MCQ
    correctAnswer: mongoose.Schema.Types.Mixed, // String or Array
    marks: {
      type: Number,
      required: true
    },
    explanation: String,
    image: String,
    order: Number
  }],
  isRandomized: {
    type: Boolean,
    default: false
  },
  attemptsAllowed: {
    type: Number,
    default: 1
  },
  startDate: Date,
  endDate: Date,
  isPublished: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const SubmissionSchema = new mongoose.Schema({
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assessment',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [{
    question: mongoose.Schema.Types.ObjectId,
    answer: mongoose.Schema.Types.Mixed,
    isCorrect: Boolean,
    marksAwarded: Number
  }],
  score: {
    type: Number,
    default: 0
  },
  totalMarks: Number,
  percentage: Number,
  passed: {
    type: Boolean,
    default: false
  },
  timeTaken: Number, // in minutes
  attemptNumber: {
    type: Number,
    default: 1
  },
  isGraded: {
    type: Boolean,
    default: false
  },
  gradedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  feedback: String,
  submittedAt: {
    type: Date,
    default: Date.now
  },
  gradedAt: Date
});

const Assessment = mongoose.model('Assessment', AssessmentSchema);
const Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = { Assessment, Submission };
