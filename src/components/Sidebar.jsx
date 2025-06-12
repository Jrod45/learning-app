import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ activeSection = 'home', onSectionChange }) => {
  const navigationItems = [
    { icon: <HomeIcon className="icon" />, label: 'Home', section: 'home', path: '/' },
    { icon: <SchoolIcon className="icon" />, label: 'Lessons', section: 'lessons', path: '/lessons' },
    { icon: <BarChartIcon className="icon" />, label: 'Progress', section: 'progress', path: '/progress' },
    { icon: <SchoolIcon className="icon" />, label: 'Achievements', section: 'achievements', path: '/achievements' },
    { icon: <SettingsIcon className="icon" />, label: 'Settings', section: 'settings', path: '/settings' }
  ];

  return (
    <div className="sidebar">
      {/* Main Menu */}
      <div className="sidebar-menu-title">Menu</div>
      <ul className="sidebar-menu-items-list">
        {navigationItems.map((item) => (
          <li
            key={item.section}
            className={`sidebar-item ${activeSection === item.section ? 'active' : ''}`}
          >
            <Link to={item.path} className="sidebar-link">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
