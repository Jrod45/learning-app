import React, { useState } from 'react';
import '../assets/styles/Homepage.css'

const Homepage = () => {
  const [user] = useState({
    name: 'Sarah Johnson',
    level: 'Intermediate',
    xp: 2450,
    streak: 21,
    wordsLearned: 347,
    lessonsCompleted: 28,
    dailyGoalProgress: 70
  });

  const [currentLesson] = useState({
    language: 'Spanish',
    unit: 'Unit 4: Travel & Transportation'
  });

  const [wordOfDay] = useState({
    word: 'Aventura',
    meaning: 'Adventure - An exciting or unusual experience'
  });

  const [leaderboard] = useState([
    { rank: 1, name: 'Maria Santos', xp: 3250, emoji: '🥇' },
    { rank: 2, name: 'You', xp: 2450, emoji: '🥈' },
    { rank: 3, name: 'David Kim', xp: 2180, emoji: '🥉' }
  ]);

  const [achievements] = useState([
    '🏆 Week Warrior',
    '🎯 Perfect Score',
    '📖 Vocab Master'
  ]);

  const handleModuleClick = (moduleName) => {
    alert(`Opening ${moduleName} module...`);
  };

  const handleContinueLearning = () => {
    alert('Continuing to your next lesson...');
  };

  const handleSettingsClick = () => {
    alert('Settings panel would open here!');
  };

  const handleNavClick = (section) => {
    alert(`Navigating to ${section}...`);
  };

  const modules = [
    {
      icon: '📚',
      title: 'Vocabulary Review',
      description: 'Practice your recent words with smart flashcards'
    },
    {
      icon: '✏️',
      title: 'Grammar Practice',
      description: 'Master grammar rules with targeted exercises'
    },
    {
      icon: '🎧',
      title: 'Listening Exercise',
      description: 'Improve comprehension with audio challenges'
    },
    {
      icon: '🗣️',
      title: 'Pronunciation',
      description: 'Perfect your accent with AI feedback'
    }
  ];

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo">Wise Language Mentor</div>
        <div className="user-profile">
          <div className="user-info">
            <h3>{user.name}</h3>
            <div className="user-level">{user.level} • {user.xp.toLocaleString()} XP</div>
          </div>
          <div className="profile-pic">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <button className="settings-btn" onClick={handleSettingsClick}>
            ⚙️
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-grid">
        {/* Continue Learning Section */}
        <div className="continue-learning">
          <h2>Ready to Continue?</h2>
          <div className="lesson-info">
            {currentLesson.language} • {currentLesson.unit}
          </div>
          <button className="continue-btn" onClick={handleContinueLearning}>
            Continue Learning →
          </button>
        </div>

        {/* Daily Goal & Stats */}
        <div className="goal-stats">
          <div className="daily-goal">
            <div className="goal-header">
              <div className="goal-title">Daily Goal</div>
              <div className="streak">🔥 {user.streak} days</div>
            </div>
            <div className="progress-ring">
              <svg width="80" height="80" className="progress-circle">
                <circle 
                  cx="40" 
                  cy="40" 
                  r="35" 
                  stroke="#e5e7eb" 
                  strokeWidth="6" 
                  fill="none"
                />
                <circle 
                  cx="40" 
                  cy="40" 
                  r="35" 
                  stroke="#6366f1" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeDasharray="220" 
                  strokeDashoffset={220 - (220 * user.dailyGoalProgress / 100)} 
                  strokeLinecap="round"
                />
              </svg>
              <div className="progress-text">{user.dailyGoalProgress}%</div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span>Words Learned</span>
              <span className="stat-value">{user.wordsLearned}</span>
            </div>
            <div className="stat-item">
              <span>Lessons Completed</span>
              <span className="stat-value">{user.lessonsCompleted}</span>
            </div>
            <div className="stat-item">
              <span>Total XP</span>
              <span className="stat-value">{user.xp.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Modules */}
      <div className="quick-modules">
        {modules.map((module, index) => (
          <div 
            key={index}
            className="module-card" 
            onClick={() => handleModuleClick(module.title)}
          >
            <div className="module-icon">{module.icon}</div>
            <div className="module-title">{module.title}</div>
            <div className="module-desc">{module.description}</div>
          </div>
        ))}
      </div>

      {/* Special Features */}
      <div className="features-grid">
        <div className="feature-card word-of-day">
          <div className="feature-title">Word of the Day</div>
          <div className="word-display">{wordOfDay.word}</div>
          <div className="word-meaning">{wordOfDay.meaning}</div>
        </div>
        
        <div className="feature-card achievements">
          <div className="feature-title">Recent Achievements</div>
          <div className="badges">
            {achievements.map((achievement, index) => (
              <div key={index} className="badge">{achievement}</div>
            ))}
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-title">📊 Leaderboard</div>
          <div style={{ marginTop: '15px' }}>
            {leaderboard.map((player, index) => (
              <div key={index} className="leaderboard-item">
                <span>{player.emoji} {player.name}</span>
                <span className="leaderboard-xp">{player.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-title">🌎 Did You Know?</div>
          <div className="cultural-fact">
            Spanish is spoken by over 500 million people worldwide and is the official language in 21 countries!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;