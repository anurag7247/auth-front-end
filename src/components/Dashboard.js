import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="overlay"></div>
      <div className="dashboard-content-wrapper">
        <header className="dashboard-header">
        
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </header>
        <main className="dashboard-content">
          {/* Add your dashboard content here */}
          <h1>The Easiset way to get your dream job </h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;