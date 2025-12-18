const Course = require('../models/Course');

// Get all courses with filters and pagination
exports.getCourses = async (req, res) => {
  try {
    const { category, level, search, page = 1, limit = 10 } = req.query;
    
    let query = {};
    
    if (category) query.category = category;
    if (level) query.level = level;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query)
      .populate('instructor', 'firstName lastName avatar')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const count = await Course.countDocuments(query);

    res.status(200).json({
      success: true,
      count: courses.length,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: courses
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get single course
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'firstName lastName avatar email')
      .populate('reviews.user', 'firstName lastName avatar');
    
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Create course
exports.createCourse = async (req, res) => {
  try {
    req.body.instructor = req.user.id;
    const course = await Course.create(req.body);
    
    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Add review
exports.addReview = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    const review = {
      user: req.user.id,
      rating: req.body.rating,
      comment: req.body.comment
    };

    course.reviews.push(review);
    
    // Update average rating
    const totalRating = course.reviews.reduce((acc, item) => item.rating + acc, 0);
    course.ratings.average = totalRating / course.reviews.length;
    course.ratings.count = course.reviews.length;

    await course.save();

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Upload material
exports.uploadMaterial = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    const material = {
      title: req.body.title,
      type: req.body.type,
      url: req.file ? `/uploads/${req.file.filename}` : req.body.url,
      size: req.file ? req.file.size : req.body.size,
      duration: req.body.duration,
      order: req.body.order || course.materials.length + 1
    };

    course.materials.push(material);
    await course.save();

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
