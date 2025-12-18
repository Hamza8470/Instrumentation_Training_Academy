import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="dashboard">
      <div className="container">
        <h1>Welcome, {user?.firstName}!</h1>
        
        <div className="dashboard-grid">
          <div className="card dashboard-card">
            <h3>My Courses</h3>
            <p className="stat">0</p>
            <p>Enrolled Courses</p>
          </div>
          
          <div className="card dashboard-card">
            <h3>Assessments</h3>
            <p className="stat">0</p>
            <p>Pending Assessments</p>
          </div>
          
          <div className="card dashboard-card">
            <h3>Progress</h3>
            <p className="stat">0%</p>
            <p>Overall Completion</p>
          </div>
          
          <div className="card dashboard-card">
            <h3>Certificates</h3>
            <p className="stat">0</p>
            <p>Earned Certificates</p>
          </div>
        </div>

        <div className="recent-activity">
          <div className="card">
            <h2>Recent Activity</h2>
            <p>No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
