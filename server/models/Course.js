const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  shortDescription: {
    type: String,
    maxlength: [500, 'Short description cannot be more than 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['basic', 'intermediate', 'advanced', 'specialized']
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  thumbnail: {
    type: String,
    default: 'default-course.jpg'
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  duration: {
    hours: Number,
    weeks: Number
  },
  curriculum: [{
    module: {
      type: String,
      required: true
    },
    topics: [String],
    duration: String,
    order: Number
  }],
  learningOutcomes: [String],
  prerequisites: [String],
  materials: [{
    title: String,
    type: {
      type: String,
      enum: ['video', 'pdf', 'presentation', 'link', 'simulation']
    },
    url: String,
    size: String,
    duration: String,
    order: Number,
    isPublic: {
      type: Boolean,
      default: false
    }
  }],
  enrollmentCount: {
    type: Number,
    default: 0
  },
  maxStudents: Number,
  language: {
    type: String,
    default: 'English'
  },
  tags: [String],
  ratings: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  startDate: Date,
  endDate: Date,
  certificateTemplate: String,
  version: {
    type: Number,
    default: 1
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

// Create course slug from title
CourseSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Course', CourseSchema);
