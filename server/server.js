const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const morgan = require('morgan');
const http = require('http');
const socketio = require('socket.io');

// Load env vars
dotenv.config();

// Import database config
const connectDB = require('./config/database');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const forumRoutes = require('./routes/forumRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const workshopRoutes = require('./routes/workshopRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const placementRoutes = require('./routes/placementRoutes');
const gamificationRoutes = require('./routes/gamificationRoutes');

// Import error handler
const errorHandler = require('./middleware/errorHandler');

// Connect to database
connectDB();

// Initialize express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketio(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
  }
});

// Make io accessible to routes
app.set('io', io);

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Join room for user
  socket.on('join', (userId) => {
    socket.join(`user_${userId}`);
    console.log(`User ${userId} joined their room`);
  });

  // Handle chat messages
  socket.on('send_message', (data) => {
    io.to(`user_${data.recipientId}`).emit('receive_message', data);
  });

  // Handle notifications
  socket.on('send_notification', (data) => {
    io.to(`user_${data.userId}`).emit('receive_notification', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Cookie parser
app.use(mongoSanitize()); // Sanitize data
app.use(compression()); // Compress responses

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static files
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/forums', forumRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/gamification', gamificationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handler (must be last)
app.use(errorHandler);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
