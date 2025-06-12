import { useState } from 'react';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TuneIcon from '@mui/icons-material/Tune';
import LockIcon from '@mui/icons-material/Lock';
import '../assets/styles/Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      dailyReminders: true,
      streakReminders: true,
      achievementAlerts: true,
      emailUpdates: false
    },
    learning: {
      dailyGoal: 15,
      difficulty: 'intermediate',
      autoplay: true,
      soundEffects: true
    },
    appearance: {
      darkMode: false,
      language: 'English',
      fontSize: 'medium'
    },
    privacy: {
      profileVisibility: 'friends',
      shareProgress: true,
      dataCollection: false
    }
  });

  const toggleSetting = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const updateSetting = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <div 
      className={`toggle-switch ${checked ? 'active' : ''}`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onChange(); }}
    >
      <div className="toggle-slider"></div>
    </div>
  );

  const SettingsSection = ({ icon: Icon, title, children }) => (
    <div className="settings-section">
      <div className="settings-section-header">
        <Icon className="material-icon" />
        <h3>{title}</h3>
      </div>
      <div className="settings-section-content">
        {children}
      </div>
    </div>
  );

  const SettingsRow = ({ label, description, children }) => (
    <div className="settings-row">
      <div className="settings-row-content">
        <div className="settings-label">{label}</div>
        {description && <div className="settings-description">{description}</div>}
      </div>
      <div className="settings-control">
        {children}
      </div>
    </div>
  );

  return (
    <div className="settings-page">
      <div className="settings-modal">
        <div className="settings-header">
          <h2>Settings</h2>
        </div>

        <div className="settings-content">
          <SettingsSection icon={SpeakerNotesIcon} title="Notifications">
            <SettingsRow 
              label="Daily Reminders" 
              description="Get reminded to practice daily"
            >
              <ToggleSwitch 
                checked={settings.notifications.dailyReminders}
                onChange={() => toggleSetting('notifications', 'dailyReminders')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Streak Reminders" 
              description="Don't break your learning streak"
            >
              <ToggleSwitch 
                checked={settings.notifications.streakReminders}
                onChange={() => toggleSetting('notifications', 'streakReminders')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Achievement Alerts" 
              description="Celebrate your milestones"
            >
              <ToggleSwitch 
                checked={settings.notifications.achievementAlerts}
                onChange={() => toggleSetting('notifications', 'achievementAlerts')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Email Updates" 
              description="Weekly progress reports"
            >
              <ToggleSwitch 
                checked={settings.notifications.emailUpdates}
                onChange={() => toggleSetting('notifications', 'emailUpdates')}
              />
            </SettingsRow>
          </SettingsSection>

          <SettingsSection icon={MenuBookIcon} title="Learning Preferences">
            <SettingsRow 
              label="Daily Goal" 
              description="Minutes per day"
            >
              <select 
                className="settings-select"
                value={settings.learning.dailyGoal}
                onChange={(e) => updateSetting('learning', 'dailyGoal', parseInt(e.target.value))}
              >
                <option value={5}>5 min</option>
                <option value={10}>10 min</option>
                <option value={15}>15 min</option>
                <option value={20}>20 min</option>
                <option value={30}>30 min</option>
                <option value={45}>45 min</option>
                <option value={60}>60 min</option>
              </select>
            </SettingsRow>
            <SettingsRow 
              label="Difficulty Level" 
              description="Adjust lesson complexity"
            >
              <select 
                className="settings-select"
                value={settings.learning.difficulty}
                onChange={(e) => updateSetting('learning', 'difficulty', e.target.value)}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </SettingsRow>
            <SettingsRow 
              label="Autoplay Audio" 
              description="Automatically play pronunciations"
            >
              <ToggleSwitch 
                checked={settings.learning.autoplay}
                onChange={() => toggleSetting('learning', 'autoplay')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Sound Effects" 
              description="Play sounds for correct/incorrect answers"
            >
              <ToggleSwitch 
                checked={settings.learning.soundEffects}
                onChange={() => toggleSetting('learning', 'soundEffects')}
              />
            </SettingsRow>
          </SettingsSection>

          <SettingsSection icon={TuneIcon} title="Appearance">
            <SettingsRow 
              label="Dark Mode" 
              description="Switch to dark theme"
            >
              <ToggleSwitch 
                checked={settings.appearance.darkMode}
                onChange={() => toggleSetting('appearance', 'darkMode')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Language" 
              description="Interface language"
            >
              <select 
                className="settings-select"
                value={settings.appearance.language}
                onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="German">Deutsch</option>
                <option value="Italian">Italiano</option>
              </select>
            </SettingsRow>
            <SettingsRow 
              label="Font Size" 
              description="Text size preference"
            >
              <select 
                className="settings-select"
                value={settings.appearance.fontSize}
                onChange={(e) => updateSetting('appearance', 'fontSize', e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </SettingsRow>
          </SettingsSection>

          <SettingsSection icon={LockIcon} title="Privacy & Security">
            <SettingsRow 
              label="Profile Visibility" 
              description="Who can see your profile"
            >
              <select 
                className="settings-select"
                value={settings.privacy.profileVisibility}
                onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </SettingsRow>
            <SettingsRow 
              label="Share Progress" 
              description="Allow friends to see your progress"
            >
              <ToggleSwitch 
                checked={settings.privacy.shareProgress}
                onChange={() => toggleSetting('privacy', 'shareProgress')}
              />
            </SettingsRow>
            <SettingsRow 
              label="Data Collection" 
              description="Help improve the app with usage data"
            >
              <ToggleSwitch 
                checked={settings.privacy.dataCollection}
                onChange={() => toggleSetting('privacy', 'dataCollection')}
              />
            </SettingsRow>
          </SettingsSection>
        </div>

        <div className="settings-footer">
          <button className="save-btn">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
