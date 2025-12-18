# Quick Start Guide - ITA Portal

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git (optional)

### Step 1: Install Dependencies

Open PowerShell and navigate to project directory:

```powershell
cd "c:\Users\DELL\OneDrive\Desktop\ITAVerify"
```

Install all dependencies (root, server, and client):

```powershell
npm run install-all
```

Or install individually:

```powershell
# Root dependencies
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd ../client
npm install
cd ..
```

### Step 2: Configure Environment Variables

#### Server Configuration
1. Navigate to the server folder
2. Copy `.env.example` to `.env`
3. Update the values in `.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ita-portal
JWT_SECRET=your_strong_secret_key_here
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
```

#### Client Configuration
1. Navigate to the client folder
2. Copy `.env.example` to `.env`
3. Update the values in `.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

### Step 3: Start MongoDB

Make sure MongoDB is running on your system:

```powershell
# If MongoDB is installed as a service, it should already be running
# Otherwise, start it manually
mongod
```

### Step 4: Run the Application

#### Option 1: Run Both Server and Client Together (Recommended)
From the root directory:

```powershell
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend client on http://localhost:3000

#### Option 2: Run Separately

**Terminal 1 - Server:**
```powershell
cd server
npm run dev
```

**Terminal 2 - Client:**
```powershell
cd client
npm start
```

### Step 5: Access the Application

Open your browser and navigate to:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/health

## 📁 Project Structure

```
ITAVerify/
├── server/               # Backend (Node.js + Express)
│   ├── config/          # Database and other configs
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
│
├── client/              # Frontend (React)
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── store/       # Redux store
│   │   └── App.js       # Main app component
│   └── package.json
│
├── package.json         # Root package.json
└── README.md           # Documentation
```

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Run both server and client
- `npm run server` - Run server only
- `npm run client` - Run client only
- `npm run install-all` - Install all dependencies

### Server Directory
- `npm start` - Run server in production
- `npm run dev` - Run server in development with nodemon

### Client Directory
- `npm start` - Run React app
- `npm run build` - Build for production
- `npm test` - Run tests

## 🎯 Default Features Implemented

### Backend (✅ Completed)
- User authentication (register, login, JWT)
- Role-based access control (Admin, Instructor, Student, Guest)
- Course management with CRUD operations
- Assessment and submission system
- File upload middleware
- Schedule and attendance management
- Forum, messaging, and announcements
- Certificate generation system
- Resource library
- Workshop booking system
- Analytics endpoints
- Notification system
- Placement portal
- Gamification (points, badges, leaderboard)
- Socket.IO for real-time features

### Frontend (✅ Completed)
- React with React Router
- Redux Toolkit for state management
- User authentication UI (Login/Register)
- Protected routes
- Dashboard
- Courses listing
- Responsive design
- Toast notifications
- API service layer

## 📝 Next Steps

1. **Customize the design** - Update colors, logos, and styling in CSS files
2. **Add more features** - Implement remaining controller logic for all endpoints
3. **Set up email service** - Configure SMTP for email notifications
4. **Add SMS service** - Configure Twilio for SMS notifications
6. **Deploy** - Deploy to Heroku, Railway, Vercel, or your preferred platform

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check the connection string in `.env`

### Port Already in Use
- Change PORT in server `.env` file
- Kill the process using the port:
  ```powershell
  # Find process on port 5000
  netstat -ano | findstr :5000
  # Kill the process (replace PID with actual process ID)
  taskkill /PID <PID> /F
  ```

### Module Not Found
- Run `npm install` in the respective directory
- Clear cache: `npm cache clean --force`

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## 🤝 Support

For issues or questions, refer to the main README.md file or create an issue in the repository.

---

**Happy Coding! 🚀**
