import React, { useState, useMemo, useCallback } from 'react';
import '../assets/styles/Homepage.css';

// MUI Icons
import SettingsIcon from '@mui/icons-material/Settings';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicIcon from '@mui/icons-material/Mic';
import PieChartIcon from '@mui/icons-material/PieChart';
import PublicIcon from '@mui/icons-material/Public';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

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
    { rank: 1, name: 'Maria Santos', xp: 3250, icon: <EmojiEventsIcon className="h-6 w-6" style={{ color: '#FFD700' }} /> },
    { rank: 2, name: 'You', xp: 2450, icon: <EmojiEventsIcon className="h-6 w-6" style={{ color: '#00C853' }} /> },
    { rank: 3, name: 'David Kim', xp: 2180, icon: <EmojiEventsIcon className="h-6 w-6" style={{ color: '#FF9100' }} /> }
  ]);

  const [achievements] = useState([
    <StarIcon className="h-6 w-6" style={{ color: '#00C853' }} />, 'Week Warrior',
    <ArrowForwardIosIcon className="h-6 w-6" style={{ color: '#EF5350' }} />, 'Perfect Score',
    <MenuBookIcon className="h-6 w-6" style={{ color: '#42A5F5' }} />, 'Vocab Master'
  ]);

  const modules = useMemo(() => [
    {
      icon: <MenuBookIcon className="h-6 w-6" style={{ color: 'white' }} />,
      title: 'Vocabulary Review',
      description: 'Practice your recent words with smart flashcards'
    },
    {
      icon: <EditNoteIcon className="h-6 w-6" style={{ color: 'white' }} />,
      title: 'Grammar Practice',
      description: 'Master grammar rules with targeted exercises'
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" style={{ color: 'white' }} />,
      title: 'Listening Exercise',
      description: 'Improve comprehension with audio challenges'
    },
    {
      icon: <MicIcon className="h-6 w-6" style={{ color: 'white' }} />,
      title: 'Pronunciation',
      description: 'Perfect your accent with AI feedback'
    }
  ], []);

  const progressCalculations = useMemo(() => {
    const circumference = 220;
    const offset = circumference - (circumference * user.dailyGoalProgress / 100);
    const formattedXP = user.xp.toLocaleString();
    const userInitials = user.name.split(' ').map(n => n[0]).join('');
    return { offset, formattedXP, userInitials };
  }, [user.dailyGoalProgress, user.xp, user.name]);

  const handleModuleClick = useCallback((moduleName) => {
    alert(`Opening ${moduleName} module...`);
  }, []);

  const handleContinueLearning = useCallback(() => {
    alert('Continuing to your next lesson...');
  }, []);

  const handleSettingsClick = useCallback(() => {
    alert('Settings panel would open here!');
  }, []);

  const handleNavClick = useCallback((section) => {
    alert(`Navigating to ${section}...`);
  }, []);

  const StatsGrid = useMemo(() => (
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
        <span className="stat-value">{progressCalculations.formattedXP}</span>
      </div>
    </div>
  ), [user.wordsLearned, user.lessonsCompleted, progressCalculations.formattedXP]);

  const ProgressRing = useMemo(() => (
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
          strokeDashoffset={progressCalculations.offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="progress-text"><h3>{user.dailyGoalProgress}%</h3></div>
    </div>
  ), [progressCalculations.offset, user.dailyGoalProgress]);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="logo">Wise Language Mentor</div>
        <div className="user-profile">
          <div className="user-info">
            <h3>{user.name}</h3>
            <div className="user-level">
              {user.level} • {progressCalculations.formattedXP} XP
            </div>
          </div>
          <div className="profile-pic">
            {progressCalculations.userInitials}
          </div>
          <button className="settings-btn" onClick={handleSettingsClick}>
            <SettingsIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-grid">
        <div className="continue-learning">
          <h2>Ready to Continue?</h2>
          <div className="lesson-info">
            {currentLesson.language} • {currentLesson.unit}
          </div>
          <button className="continue-btn" onClick={handleContinueLearning}>
            Continue Learning →
          </button>
        </div>

        <div className="goal-stats">
          <div className="daily-goal">
            <div className="goal-header">
              <div className="goal-title">Daily Goal</div>
              <div className="streak">
                <FlashOnIcon className="h-6 w-6" style={{ color: '#8e44ad' }} /> {user.streak} days
              </div>
            </div>
            {ProgressRing}
          </div>
          {StatsGrid}
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
          <div className="feature-title">
            <PieChartIcon className="h-6 w-6" style={{ color: '#42A5F5' }} /> Leaderboard
          </div>
          <div style={{ marginTop: '15px' }}>
            {leaderboard.map((player, index) => (
              <div key={index} className="leaderboard-item">
                <span>{player.icon} {player.name}</span>
                <span className="leaderboard-xp">{player.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-title">
            <PublicIcon className="h-6 w-6" style={{ color: '#42A5F5' }} /> Did You Know?
          </div>
          <div className="cultural-fact">
            Spanish is spoken by over 500 million people worldwide and is the official language in 21 countries!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
