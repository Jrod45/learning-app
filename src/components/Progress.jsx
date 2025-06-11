import React, { useState, useMemo } from 'react';
import { ChartBarIcon, LightningBoltIcon } from '@heroicons/react/solid';
import '../assets/styles/Progress.css';

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const stats = useMemo(() => ({
    totalXP: 2450,
    wordsLearned: 347,
    lessonsCompleted: 28,
    currentStreak: 21,
    longestStreak: 45,
    timeSpent: 124, // hours
    averageAccuracy: 87,
    weeklyGoal: 300,
    weeklyProgress: 270
  }), []);

  const weeklyData = useMemo(() => [
    { day: 'Mon', xp: 45, lessons: 2, time: 25 },
    { day: 'Tue', xp: 38, lessons: 1, time: 18 },
    { day: 'Wed', xp: 52, lessons: 3, time: 32 },
    { day: 'Thu', xp: 41, lessons: 2, time: 22 },
    { day: 'Fri', xp: 35, lessons: 1, time: 15 },
    { day: 'Sat', xp: 59, lessons: 3, time: 38 },
    { day: 'Sun', xp: 0, lessons: 0, time: 0 }
  ], []);

  const skillBreakdown = useMemo(() => [
    { skill: 'Vocabulary', level: 85, totalWords: 347, recentWords: 23 },
    { skill: 'Grammar', level: 72, totalWords: 156, recentWords: 12 },
    { skill: 'Listening', level: 68, totalWords: 89, recentWords: 8 },
    { skill: 'Speaking', level: 61, totalWords: 67, recentWords: 5 },
    { skill: 'Reading', level: 79, totalWords: 134, recentWords: 15 }
  ], []);

  const achievements = useMemo(() => [
    { name: 'Week Warrior', description: 'Complete 7 days in a row', date: '2 days ago', icon: '🏆' },
    { name: 'Vocab Master', description: 'Learn 300+ words', date: '1 week ago', icon: '📚' },
    { name: 'Perfect Score', description: 'Get 100% on a lesson', date: '3 days ago', icon: '🎯' },
    { name: 'Early Bird', description: 'Study before 8 AM', date: '5 days ago', icon: '🌅' }
  ], []);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Your Progress</h1>
        <p>Track your learning journey and celebrate your achievements</p>
      </div>

      {/* Overview Stats */}
      <div className="stats-overview">
        <div className="stat-card primary">
          <div className="stat-icon">
            <ChartBarIcon className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.totalXP.toLocaleString()}</div>
            <div className="stat-label">Total XP</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📖</div>
          <div className="stat-content">
            <div className="stat-number">{stats.wordsLearned}</div>
            <div className="stat-label">Words Learned</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-number">{stats.lessonsCompleted}</div>
            <div className="stat-label">Lessons Completed</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <LightningBoltIcon className="h-6 w-6 text-red-500" />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.currentStreak}</div>
            <div className="stat-label">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="weekly-goal-section">
        <div className="section-header">
          <h2>Weekly Goal</h2>
          <div className="goal-status">
            {stats.weeklyProgress}/{stats.weeklyGoal} XP
          </div>
        </div>
        <div className="goal-progress">
          <div className="goal-bar">
            <div 
              className="goal-fill"
              style={{ width: `${(stats.weeklyProgress / stats.weeklyGoal) * 100}%` }}
            ></div>
          </div>
          <div className="goal-percentage">
            {Math.round((stats.weeklyProgress / stats.weeklyGoal) * 100)}% Complete
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="activity-section">
        <div className="section-header">
          <h2>Weekly Activity</h2>
          <div className="period-selector">
            <button 
              className={selectedPeriod === 'week' ? 'active' : ''}
              onClick={() => handlePeriodChange('week')}
            >
              Week
            </button>
            <button 
              className={selectedPeriod === 'month' ? 'active' : ''}
              onClick={() => handlePeriodChange('month')}
            >
              Month
            </button>
          </div>
        </div>
        
        <div className="activity-chart">
          {weeklyData.map((day, index) => (
            <div key={index} className="day-column">
              <div className="day-label">{day.day}</div>
              <div className="activity-bars">
                <div 
                  className="xp-bar"
                  style={{ height: `${(day.xp / 60) * 100}%` }}
                  title={`${day.xp} XP`}
                ></div>
              </div>
              <div className="day-stats">
                <div className="xp-value">{day.xp}</div>
                <div className="lessons-value">{day.lessons}L</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className="skills-section">
        <h2>Skills Breakdown</h2>
        <div className="skills-grid">
          {skillBreakdown.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.skill}</h3>
                <div className="skill-level">{skill.level}%</div>
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-stats">
                <span>{skill.totalWords} total</span>
                <span className="recent">+{skill.recentWords} this week</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="achievements-section">
        <h2>Recent Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.name}</h3>
                <p>{achievement.description}</p>
                <div className="achievement-date">{achievement.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Stats */}
      <div className="additional-stats">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-label">Time Spent Learning</span>
            <span className="stat-value">{stats.timeSpent} hours</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Average Accuracy</span>
            <span className="stat-value">{stats.averageAccuracy}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Longest Streak</span>
            <span className="stat-value">{stats.longestStreak} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;