const { Assessment, Submission } = require('../models/Assessment');

exports.getAssessments = async (req, res) => {
  try {
    const { course, type } = req.query;
    let query = {};
    
    if (course) query.course = course;
    if (type) query.type = type;

    const assessments = await Assessment.find(query)
      .populate('course', 'title')
      .populate('createdBy', 'firstName lastName');

    res.status(200).json({ success: true, data: assessments });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id)
      .populate('course', 'title')
      .populate('createdBy', 'firstName lastName');

    if (!assessment) {
      return res.status(404).json({ success: false, error: 'Assessment not found' });
    }

    res.status(200).json({ success: true, data: assessment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.createAssessment = async (req, res) => {
  try {
    req.body.createdBy = req.user.id;
    const assessment = await Assessment.create(req.body);

    res.status(201).json({ success: true, data: assessment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!assessment) {
      return res.status(404).json({ success: false, error: 'Assessment not found' });
    }

    res.status(200).json({ success: true, data: assessment });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findByIdAndDelete(req.params.id);

    if (!assessment) {
      return res.status(404).json({ success: false, error: 'Assessment not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.submitAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);

    if (!assessment) {
      return res.status(404).json({ success: false, error: 'Assessment not found' });
    }

    // Check previous attempts
    const previousAttempts = await Submission.countDocuments({
      assessment: req.params.id,
      student: req.user.id
    });

    if (previousAttempts >= assessment.attemptsAllowed) {
      return res.status(400).json({ success: false, error: 'Maximum attempts exceeded' });
    }

    let score = 0;
    const answers = req.body.answers.map(ans => {
      const question = assessment.questions.id(ans.question);
      let isCorrect = false;
      let marksAwarded = 0;

      if (question.questionType === 'mcq' || question.questionType === 'true-false') {
        isCorrect = ans.answer === question.correctAnswer;
        marksAwarded = isCorrect ? question.marks : 0;
      }

      score += marksAwarded;

      return {
        question: ans.question,
        answer: ans.answer,
        isCorrect,
        marksAwarded
      };
    });

    const percentage = (score / assessment.totalMarks) * 100;
    const passed = score >= assessment.passingMarks;

    const submission = await Submission.create({
      assessment: req.params.id,
      student: req.user.id,
      answers,
      score,
      totalMarks: assessment.totalMarks,
      percentage,
      passed,
      attemptNumber: previousAttempts + 1,
      isGraded: assessment.questions.every(q => q.questionType !== 'descriptive')
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ assessment: req.params.id })
      .populate('student', 'firstName lastName email');

    res.status(200).json({ success: true, data: submissions });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.gradeSubmission = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({ success: false, error: 'Submission not found' });
    }

    submission.isGraded = true;
    submission.gradedBy = req.user.id;
    submission.gradedAt = Date.now();
    submission.feedback = req.body.feedback;
    submission.score = req.body.score;
    submission.percentage = (req.body.score / submission.totalMarks) * 100;
    submission.passed = req.body.score >= submission.totalMarks * 0.4; // 40% passing

    await submission.save();

    res.status(200).json({ success: true, data: submission });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
