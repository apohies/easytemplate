import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>My Dashboard</h1>
        <div>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>
      
      <nav className="navbar">
        <ul>
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</li>
          <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</li>
          <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Settings</li>
        </ul>
      </nav>
      
      <main className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <p>This is your main dashboard. Content for the {activeTab} tab goes here.</p>
        {/* Add more content here to demonstrate scrolling */}
        {[...Array(20)].map((_, index) => (
          <p key={index}>This is paragraph {index + 1} to demonstrate scrolling.</p>
        ))}
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 My Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;