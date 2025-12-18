# Instrumentation Training Academy Portal

A comprehensive MERN stack web application for managing an instrumentation training academy with features for user management, course delivery, assessments, payments, and more.

## 🚀 Features

### Core Features
- **User Management**: Role-based access (Admin, Instructor, Student, Guest) with authentication
- **Course Management**: Complete course creation, editing, and curriculum management
- **Learning Materials**: Video library, PDFs, presentations, and interactive simulations
- **Class Scheduling**: Batch creation, calendar, attendance tracking
- **Assessments**: Quizzes, tests, auto-grading, and progress tracking
- **Communication**: Discussion forums, messaging, announcements
- **Analytics**: Progress reports, performance metrics, attendance analytics
- **Certifications**: Digital certificates with QR verification
- **Resource Library**: PDFs, case studies, datasheets, industry standards
- **Workshop Booking**: Lab seat booking and equipment management
- **Admin Dashboard**: Master control panel for complete system management
- **Gamification**: Points, badges, leaderboards
- **Mobile Support**: Responsive design with offline access

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd ITAVerify
```

### 2. Install all dependencies
```bash
npm run install-all
```

Or install individually:
```bash
# Root dependencies
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
```

### 3. Environment Configuration

#### Server (.env)
Create `server/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb:
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@itaportal.com

# SMS Configuration
SMS_API_KEY=your_sms_api_key
SMS_SENDER_ID=ITAPORT

# Cloud Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Frontend URL
CLIENT_URL=http://localhost:3000
```

#### Client (.env)
Create `client/.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

### 4. Start MongoDB
```bash
mongod
```

### 5. Run the application

#### Development Mode (Both server and client)
```bash
npm run dev
```

#### Server Only
```bash
npm run server
```

#### Client Only
```bash
npm run client
```

## 📁 Project Structure

```
ITAVerify/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── assets/        # Images, icons, etc.
│   │   └── App.js
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   ├── uploads/          # File uploads
│   └── server.js
│
└── package.json          # Root package.json
```

## 🔑 Default Admin Credentials

After seeding the database:
- **Email**: admin@itaportal.com
- **Password**: Admin@123

## 🌐 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Main Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password

#### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin)

#### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (Admin/Instructor)
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

#### Assessments
- `GET /api/assessments` - Get assessments
- `POST /api/assessments` - Create assessment
- `POST /api/assessments/:id/submit` - Submit assessment
- `GET /api/assessments/:id/results` - Get results

## 🧪 Testing

```bash
# Server tests
cd server
npm test

# Client tests
cd client
npm test
```

## 🚀 Deployment

### Server Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Build command: `npm install`
3. Start command: `npm start`

### Client Deployment (Vercel/Netlify)
1. Build command: `npm run build`
2. Publish directory: `build`
3. Set environment variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Contact

For support or queries, contact: support@itaportal.com
