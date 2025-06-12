import React, { useState, useMemo } from 'react';
import '../assets/styles/Lessons.css';

// MUI icons
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlightIcon from '@mui/icons-material/Flight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Lessons = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = useMemo(() => [
    {
      id: 1,
      title: 'Basic Greetings',
      level: 'Beginner',
      progress: 100,
      lessons: 8,
      completedLessons: 8,
      xp: 120,
      icon: <WavingHandIcon />
    },
    {
      id: 2,
      title: 'Family & Relationships',
      level: 'Beginner',
      progress: 100,
      lessons: 12,
      completedLessons: 12,
      xp: 180,
      icon: <Diversity3Icon />
    },
    {
      id: 3,
      title: 'Food & Dining',
      level: 'Beginner',
      progress: 75,
      lessons: 10,
      completedLessons: 7,
      xp: 140,
      icon: <RestaurantIcon />
    },
    {
      id: 4,
      title: 'Travel & Transportation',
      level: 'Intermediate',
      progress: 40,
      lessons: 15,
      completedLessons: 6,
      xp: 90,
      icon: <FlightIcon />
    },
    {
      id: 5,
      title: 'Shopping & Money',
      level: 'Intermediate',
      progress: 0,
      lessons: 12,
      completedLessons: 0,
      xp: 0,
      icon: <ShoppingCartIcon />
    },
    {
      id: 6,
      title: 'Business & Work',
      level: 'Advanced',
      progress: 0,
      lessons: 18,
      completedLessons: 0,
      xp: 0,
      icon: <BusinessCenterIcon />
    }
  ], []);

  const currentUnit = units[3];

  const handleUnitClick = (unit) => {
    if (unit.progress > 0 || unit.id <= 4) {
      setSelectedUnit(unit);
      alert(`Opening ${unit.title} unit...`);
    } else {
      alert('Complete previous units to unlock this one!');
    }
  };

  const handleStartLesson = () => {
    alert('Starting lesson...');
  };

  return (
    <div className="lessons-container">
      <div className="lessons-header">
        <h1>Your Learning Path</h1>
        <p>Master Spanish step by step with structured lessons</p>
      </div>

      {/* Current Unit Highlight */}
      <div className="current-unit">
        <div className="current-unit-header">
          <h2>Continue Learning</h2>
          <div className="unit-badge intermediate">Current Unit</div>
        </div>
        <div className="current-unit-card">
          <div className="unit-icon-large">{currentUnit.icon}</div>
          <div className="unit-info">
            <h3>{currentUnit.title}</h3>
            <div className="unit-meta">
              <span className="level-badge intermediate">{currentUnit.level}</span>
              <span className="lesson-count">{currentUnit.completedLessons}/{currentUnit.lessons} lessons</span>
            </div>
            <div className="progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${currentUnit.progress}%` }}
                ></div>
              </div>
              <p className='pro-text'>{currentUnit.progress}% complete</p>
            </div>
          </div>
          <button className="continue-lesson-btn" onClick={handleStartLesson}>
            Continue Lesson →
          </button>
        </div>
      </div>

      {/* All Units Grid */}
      <div className="units-section">
        <h2>All Units</h2>
        <div className="units-grid">
          {units.map((unit) => (
            <div
              key={unit.id}
              className={`unit-card ${unit.progress === 0 && unit.id > 4 ? 'locked' : ''} ${unit.id === currentUnit.id ? 'current' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              <div className="unit-card-header">
                <div className="unit-icon">{unit.icon}</div>
                {unit.progress === 0 && unit.id > 4 && <div className="lock-icon"><LockIcon fontSize="small" /></div>}
                {unit.progress === 100 && <div className="complete-icon"><CheckCircleIcon fontSize="small" /></div>}
              </div>

              <div className="unit-content">
                <h3>{unit.title}</h3>
                <div className="unit-details">
                  <span className={`level-badge ${unit.level.toLowerCase()}`}>
                    {unit.level}
                  </span>
                  <span className="xp-earned">{unit.xp} XP</span>
                </div>

                <div className="lesson-progress">
                  {unit.completedLessons}/{unit.lessons} lessons
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${unit.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="learning-tips">
        <h3>💡 Learning Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon"><AccessTimeIcon /></div>
            <div className="tip-content">
              <h4>Consistency is Key</h4>
              <p>Practice for 15-20 minutes daily for best results</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon"><AutorenewIcon /></div>
            <div className="tip-content">
              <h4>Review Regularly</h4>
              <p>Revisit previous units to reinforce your memory</p>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon"><RecordVoiceOverIcon /></div>
            <div className="tip-content">
              <h4>Practice Speaking</h4>
              <p>Use pronunciation exercises to improve fluency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
