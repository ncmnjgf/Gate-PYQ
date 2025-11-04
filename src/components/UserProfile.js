import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../css/UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    questionsAttempted: 0,
    correctAnswers: 0,
    bookmarkedQuestions: 0,
    accuracy: 0,
    lastVisit: null
  });

  useEffect(() => {
    // Load user stats from localStorage
    const loadStats = () => {
      const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedQuestions') || '[]');

      const attempted = userProgress.attempted || 0;
      const correct = userProgress.correct || 0;
      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

      setStats({
        questionsAttempted: attempted,
        correctAnswers: correct,
        bookmarkedQuestions: bookmarks.length,
        accuracy: accuracy,
        lastVisit: userProgress.lastVisit || new Date().toISOString()
      });
    };

    loadStats();
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-empty">
          <span className="empty-icon">👤</span>
          <h3>No Profile Data</h3>
          <p>Please sign in to view your profile</p>
        </div>
      </div>
    );
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getMemberSince = () => {
    if (!user.loginTime) return 'Recently joined';
    const loginDate = new Date(user.loginTime);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return loginDate.toLocaleDateString('en-US', options);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-banner"></div>
          <div className="profile-avatar-section">
            <img
              src={user.picture}
              alt={user.name}
              className="profile-avatar-large"
            />
            <div className="profile-info">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-member-since">
                Member since {getMemberSince()}
              </p>
            </div>
          </div>
        </div>

        <div className="profile-greeting">
          <h2>{getGreeting()}, {user.givenName}! 👋</h2>
          <p>Keep up the great work on your GATE preparation!</p>
        </div>

        <div className="profile-stats-grid">
          <div className="">
            <div className=""></div>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>





          <div className="">
            <div className=""></div>
            <div className="t">
              <div className="stat-value-large"></div>
              <div className="stat-label-large"></div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default UserProfile;
