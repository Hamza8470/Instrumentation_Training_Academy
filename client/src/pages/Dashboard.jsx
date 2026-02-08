import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <h1>Welcome to your dashboard!</h1>
        
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
