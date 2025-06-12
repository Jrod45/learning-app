import React, { useState, useMemo } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import HeadsetIcon from '@mui/icons-material/Headset';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AdjustIcon from '@mui/icons-material/Adjust'; // replacing TargetIcon
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import '../assets/styles/Achievements.css';

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const achievements = useMemo(() => [
    {
      id: 1,
      name: 'First Steps',
      description: 'Complete your first lesson',
      icon: <EmojiEventsIcon style={{ color: '#f59e0b' }} />,
      category: 'beginner',
      earned: true,
      earnedDate: '2024-05-15',
      xp: 50
    },
    {
      id: 2,
      name: 'Week Warrior',
      description: 'Study for 7 consecutive days',
      icon: <WhatshotIcon style={{ color: '#ef4444' }} />,
      category: 'streak',
      earned: true,
      earnedDate: '2024-05-22',
      xp: 100
    },
    {
      id: 3,
      name: 'Vocab Master',
      description: 'Learn 300+ vocabulary words',
      icon: <MenuBookIcon style={{ color: '#2563eb' }} />,
      category: 'vocabulary',
      earned: true,
      earnedDate: '2024-05-28',
      xp: 200
    },
    {
      id: 4,
      name: 'Perfect Score',
      description: 'Get 100% accuracy on any lesson',
      icon: <AdjustIcon style={{ color: '#ef4444' }} />,
      category: 'accuracy',
      earned: true,
      earnedDate: '2024-05-20',
      xp: 75
    },
    {
      id: 5,
      name: 'Early Bird',
      description: 'Study before 8 AM for 5 days',
      icon: <WbSunnyIcon style={{ color: '#fbbf24' }} />,
      category: 'time',
      earned: true,
      earnedDate: '2024-05-25',
      xp: 150
    },
    {
      id: 6,
      name: 'Night Owl',
      description: 'Study after 10 PM for 5 days',
      icon: <NightlightIcon style={{ color: '#4b5563' }} />,
      category: 'time',
      earned: false,
      progress: 60,
      xp: 150
    },
    {
      id: 7,
      name: 'Grammar Guru',
      description: 'Complete 50 grammar exercises',
      icon: <EditIcon style={{ color: '#10b981' }} />,
      category: 'grammar',
      earned: false,
      progress: 78,
      xp: 200
    },
    {
      id: 8,
      name: 'Listening Legend',
      description: 'Complete 100 listening exercises',
      icon: <HeadsetIcon style={{ color: '#6366f1' }} />,
      category: 'listening',
      earned: false,
      progress: 45,
      xp: 250
    },
    {
      id: 9,
      name: 'Speaking Star',
      description: 'Complete 25 pronunciation exercises',
      icon: <RecordVoiceOverIcon style={{ color: '#8b5cf6' }} />,
      category: 'speaking',
      earned: false,
      progress: 32,
      xp: 200
    },
    {
      id: 10,
      name: 'Marathon Master',
      description: 'Study for 30 consecutive days',
      icon: <DirectionsRunIcon style={{ color: '#ef4444' }} />,
      category: 'streak',
      earned: false,
      progress: 70,
      xp: 500
    },
    {
      id: 11,
      name: 'Conversation King',
      description: 'Complete all conversation lessons',
      icon: <ChatBubbleIcon style={{ color: '#2563eb' }} />,
      category: 'conversation',
      earned: false,
      progress: 25,
      xp: 300
    },
    {
      id: 12,
      name: 'Speed Demon',
      description: 'Complete a lesson in under 2 minutes',
      icon: <FlashOnIcon style={{ color: '#f97316' }} />,
      category: 'speed',
      earned: false,
      progress: 0,
      xp: 100
    }
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'All', icon: <EmojiEventsIcon /> },
    { id: 'beginner', name: 'Beginner', icon: <WbSunnyIcon /> },
    { id: 'streak', name: 'Streaks', icon: <WhatshotIcon /> },
    { id: 'vocabulary', name: 'Vocabulary', icon: <MenuBookIcon /> },
    { id: 'grammar', name: 'Grammar', icon: <EditIcon /> },
    { id: 'listening', name: 'Listening', icon: <HeadsetIcon /> },
    { id: 'speaking', name: 'Speaking', icon: <RecordVoiceOverIcon /> },
    { id: 'accuracy', name: 'Accuracy', icon: <AdjustIcon /> }
  ], []);

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return achievements;
    return achievements.filter(achievement => achievement.category === selectedCategory);
  }, [achievements, selectedCategory]);

  const stats = useMemo(() => {
    const earned = achievements.filter(a => a.earned).length;
    const total = achievements.length;
    const totalXP = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0);

    return {
      earned,
      total,
      percentage: Math.round((earned / total) * 100),
      totalXP
    };
  }, [achievements]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <h1>Achievements</h1>
        <p>Celebrate your learning milestones and unlock new badges</p>
      </div>

      {/* Achievement Stats */}
      <div className="achievement-stats">
        <div className="stats-card">
          <div className="stats-content">
            <div className="stats-number">{stats.earned}/{stats.total}</div>
            <div className="stats-label">Achievements Unlocked</div>
          </div>
          <div className="stats-visual">
            <div className="progress-circle">
              <svg width="80" height="80">
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
                  strokeDashoffset={220 - (220 * stats.percentage / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="progress-percentage">{stats.percentage}%</div>
            </div>
          </div>
        </div>

        <div className="xp-card">
          <div className="xp-icon"><FlashOnIcon style={{ fontSize: 28, color: '#f97316' }} /></div>
          <div className="xp-content">
            <div className="xp-number">{stats.totalXP}</div>
            <div className="xp-label">XP from Achievements</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="achievements-grid">
        {filteredAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}
          >
            <div className="achievement-icon-container">
              <div className="achievement-icon">
                {achievement.earned ? (
                  <CheckCircleIcon className="h-8 w-8 text-green-500" />
                ) : (
                  <LockIcon className="h-8 w-8 text-gray-400" />
                )}
              </div>
              {achievement.earned && <div className="earned-badge">✓</div>}
            </div>

            <div className="achievement-content">
              <h3 className="achievement-name">{achievement.name}</h3>
              <p className="achievement-description">{achievement.description}</p>

              {achievement.earned ? (
                <div className="achievement-earned">
                  <div className="earned-date">
                    Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                  </div>
                  <div className="earned-xp">+{achievement.xp} XP</div>
                </div>
              ) : (
                <div className="achievement-progress">
                  {achievement.progress !== undefined ? (
                    <>
                      <div className="prog-bar">
                        <div
                          className="prog-fill"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                      <div className="prog-text">{achievement.progress}% Complete</div>
                    </>
                  ) : (
                    <div className="locked-text">Keep learning to unlock!</div>
                  )}
                  <div className="potential-xp">{achievement.xp} XP</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="motivation-section">
        <h2><AdjustIcon style={{ verticalAlign: 'middle', marginRight: 6, color: '#ef4444' }} /> Achievement Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <CalendarTodayIcon style={{ fontSize: 32, color: '#6366f1' }} />
            <div className="tip-content">
              <h4>Daily Consistency</h4>
              <p>Study a little bit every day to build long streaks and unlock streak-based achievements.</p>
            </div>
          </div>

          <div className="tip-card">
            <AdjustIcon style={{ fontSize: 32, color: '#f59e0b' }} />
            <div className="tip-content">
              <h4>Focus on Accuracy</h4>
              <p>Take your time with lessons to improve accuracy and unlock precision-based badges.</p>
            </div>
          </div>

          <div className="tip-card">
            <EmojiEventsIcon style={{ fontSize: 32, color: '#ef4444' }} />
            <div className="tip-content">
              <h4>Try Different Skills</h4>
              <p>Practice various skills like speaking, listening, and grammar to earn diverse achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
